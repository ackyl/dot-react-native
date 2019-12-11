import React, {Component} from 'react';
import {View} from 'react-native';
import Style from './style';

export default class Spacer extends Component {
  componentDidMount() {}

  // ----------------------------------------

  getStyleBase() {
    const {space, left, row} = this.props;

    const composedStyle = [Style.base];
    const newStyle = {};

    newStyle.marginBottom = space ? space * 8 : 0;
    newStyle.marginLeft = left ? left * 8 : 0;
    newStyle.flexDirection = row ? 'row' : null;

    composedStyle.push(newStyle);

    return composedStyle;
  }

  // ----------------------------------------

  render() {
    return <View style={this.getStyleBase()}>{this.props.children}</View>;
  }
}
