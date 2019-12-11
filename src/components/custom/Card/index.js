import React, {Component} from 'react';
import {View} from 'react-native';
import Style from './style';

export default class Card extends Component {
  componentDidMount() {}

  // ----------------------------------------

  getStyleBase() {
    const {background, margin, padding, paddingVertical} = this.props;

    const composedStyle = [Style.base];
    const newStyle = {};

    switch (background) {
      case 'yellow':
        newStyle.backgroundColor = '#ffc52b';
        break;
      case 'grey':
        newStyle.backgroundColor = 'rgba(215, 235, 255, 0.2)';
        break;
      default:
        newStyle.backgroundColor = background;
    }

    newStyle.margin = margin ? margin : 0;
    newStyle.padding = padding ? padding : 0;
    newStyle.paddingVertical = paddingVertical ? paddingVertical : 0;

    composedStyle.push(newStyle);

    return composedStyle;
  }

  // ----------------------------------------

  render() {
    return <View style={this.getStyleBase()}>{this.props.children}</View>;
  }
}
