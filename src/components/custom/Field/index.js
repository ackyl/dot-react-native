import React, {Component} from 'react';
import {View} from 'react-native';
import Style from './style';

import {TextBase} from '@app-components-base';
import {Spacer} from '@app-components-custom';

export default class Field extends Component {
  componentDidMount() {}

  // ----------------------------------------

  getStyleBase() {
    const {flex, paddingVertical, paddingHorizontal, marginLeft} = this.props;

    const composedStyle = [Style.base];
    const newStyle = {};

    newStyle.flex = flex ? flex : null;
    newStyle.paddingVertical = paddingVertical ? paddingVertical : 0;
    newStyle.paddingHorizontal = paddingHorizontal ? paddingHorizontal : 0;
    newStyle.marginLeft = marginLeft ? marginLeft : 0;

    composedStyle.push(newStyle);

    return composedStyle;
  }

  // ----------------------------------------

  getTextColor(type, light) {
    let color = '';

    if (type === 'label') {
      color = light ? 'rgba(255, 255, 255, 0.4)' : 'rgba(15, 24, 33, 0.45)';
    } else {
      color = light ? 'white' : 'black';
    }

    return color;
  }

  // ----------------------------------------

  _renderLabel() {
    const {label, light} = this.props;

    return (
      <TextBase
        text={label}
        fontSize={12}
        color={this.getTextColor('label', light)}
      />
    );
  }

  // ----------------------------------------

  _renderValue() {
    const {value, valueSize, light, currency} = this.props;

    const fontSize = valueSize ? valueSize : 18;

    const text = currency ? `IDR ${value.toLocaleString()}` : value;

    return (
      <TextBase
        text={text}
        fontSize={fontSize}
        color={this.getTextColor('value', light)}
        fontWeight={'bold'}
      />
    );
  }

  // ----------------------------------------

  render() {
    return (
      <View style={this.getStyleBase()}>
        {this._renderLabel()}

        <Spacer space={0.5} />

        {this._renderValue()}
      </View>
    );
  }
}
