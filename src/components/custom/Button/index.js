import React, {Component} from 'react';
import {View} from 'react-native';
import Style from './style';
import {TextBase} from '@app-components-base';

export default class Button extends Component {
  componentDidMount() {}

  // ----------------------------------------

  getStyleBase() {
    const {background} = this.props;

    const baseStyle = [Style.base];
    const apply = {};

    switch (background) {
      case 'yellow':
        apply.backgroundColor = '#ffc52b';
        break;
      case 'grey':
        apply.backgroundColor = 'rgba(15, 24, 33, 0.15)';
        break;
      default:
        apply.backgroundColor = 'rgba(215, 235, 255, 0.1)';
    }

    baseStyle.push(apply);

    return baseStyle;
  }

  // ----------------------------------------

  render() {
    const {label, color} = this.props;

    return (
      <View style={this.getStyleBase()}>
        <TextBase text={label} fontSize={14} color={color ? color : 'white'} />
      </View>
    );
  }
}
