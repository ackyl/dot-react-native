import React, {Component} from 'react';
import {Text} from 'react-native';
import Style from './style';

export default class TextBase extends Component {
  componentDidMount() {}

  // ----------------------------------------

  getStyleBase() {
    const {fontSize, fontWeight, color} = this.props;

    const composedStyle = [Style.base];
    const newStyle = {};

    newStyle.fontSize = fontSize ? fontSize : 12;
    newStyle.fontWeight = fontWeight ? fontWeight : null;
    newStyle.color = color ? color : 'black';

    composedStyle.push(newStyle);

    return composedStyle;
  }

  // ----------------------------------------

  render() {
    const {text} = this.props;

    return <Text style={this.getStyleBase()}> {text} </Text>;
  }
}
