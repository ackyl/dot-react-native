import React, {Component} from 'react';
import {Text} from 'react-native';
import Style from './style';

export default class TextBase extends Component {
  componentDidMount() {}

  // ----------------------------------------

  getStyleBase() {
    const {
      fontSize,
      fontWeight,
      color,
      marginLeft,
      paddingLeft,
      bold,
      opacity,
    } = this.props;

    const baseStyle = [Style.base];
    const apply = {};

    apply.fontSize = fontSize ? fontSize : 12;
    apply.fontWeight = fontWeight ? fontWeight : null;
    apply.fontWeight = bold ? 'bold' : null;
    apply.color = color ? color : 'black';
    apply.marginLeft = marginLeft ? marginLeft : null;
    apply.paddingLeft = paddingLeft ? paddingLeft : null;
    apply.opacity = opacity ? opacity : null;

    baseStyle.push(apply);

    return baseStyle;
  }

  // ----------------------------------------

  render() {
    const {text, numberOfLines} = this.props;

    return (
      <Text
        style={this.getStyleBase()}
        numberOfLines={numberOfLines ? numberOfLines : null}>
        {text}
      </Text>
    );
  }
}
