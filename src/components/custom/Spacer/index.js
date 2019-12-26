import React, {Component} from 'react';
import {View} from 'react-native';
import Style from './style';

export default class Spacer extends Component {
  componentDidMount() {}

  // ----------------------------------------

  getStyleBase() {
    const {
      space,
      top,
      left,
      row,
      flex,
      justifyContent,
      alignItems,
      backgroundColor,
      wrap,
    } = this.props;

    const baseStyle = [Style.base];
    const apply = {};

    apply.marginBottom = space ? space * 8 : 0;
    apply.marginTop = top ? top * 8 : 0;
    apply.marginLeft = left ? left * 8 : 0;
    apply.flexDirection = row ? 'row' : null;
    apply.flex = flex ? flex : null;
    apply.justifyContent = justifyContent ? justifyContent : null;
    apply.alignItems = alignItems ? alignItems : null;
    apply.backgroundColor = backgroundColor ? backgroundColor : null;
    apply.flexWrap = wrap ? 'wrap' : null;

    baseStyle.push(apply);

    return baseStyle;
  }

  // ----------------------------------------

  render() {
    return <View style={this.getStyleBase()}>{this.props.children}</View>;
  }
}
