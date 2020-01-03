import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Style from './style';

export default class Card extends Component {
  componentDidMount() {}

  // ----------------------------------------

  getStyleBase() {
    const {
      background,
      borderRadius,
      borderBL,
      borderBR,
      borderTL,
      borderTR,
      borderWidth,
      borderColor,
      margin,
      marginH,
      marginV,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      padding,
      paddingV,
      paddingTop,
      paddingBottom,
      paddingLeft,
      height,
      width,
      top,
      bottom,
    } = this.props;

    const baseStyle = [Style.base];
    const apply = {};

    switch (background) {
      case 'yellow':
        apply.backgroundColor = '#ffc52b';
        break;
      case 'grey':
        apply.backgroundColor = 'rgba(215, 235, 255, 0.2)';
        break;
      case 'clear':
        apply.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        break;
      default:
        apply.backgroundColor = background;
    }

    apply.borderRadius = borderRadius ? borderRadius : null;
    apply.borderBottomLeftRadius = borderBL ? borderBL : null;
    apply.borderBottomRightRadius = borderBR ? borderBR : null;
    apply.borderTopLeftRadius = borderTL ? borderTL : null;
    apply.borderTopRightRadius = borderTR ? borderTR : null;
    apply.borderWidth = borderWidth ? borderWidth : null;
    apply.borderColor = borderColor ? borderColor : null;

    apply.margin = margin ? margin : null;
    apply.marginHorizontal = marginH ? marginH : null;
    apply.marginVertical = marginV ? marginV : null;
    apply.marginTop = marginTop ? marginTop : null;
    apply.marginBottom = marginBottom ? marginBottom : null;
    apply.marginLeft = marginLeft ? marginLeft : null;
    apply.marginRight = marginRight ? marginRight : null;

    apply.padding = padding ? padding : null;
    apply.paddingVertical = paddingV ? paddingV : null;
    apply.paddingTop = paddingTop ? paddingTop : null;
    apply.paddingBottom = paddingBottom ? paddingBottom : null;
    apply.paddingLeft = paddingLeft ? paddingLeft : null;

    apply.height = height ? height : null;
    apply.width = width ? width : null;

    apply.top = top ? top : null;
    apply.bottom = bottom ? bottom : null;

    baseStyle.push(apply);

    return baseStyle;
  }

  // ----------------------------------------

  onPress() {
    const {onPress} = this.props;

    if (onPress) {
      onPress();
    }
  }

  // ----------------------------------------

  render() {
    const {clickable} = this.props;

    if (clickable) {
      return (
        <TouchableOpacity
          style={this.getStyleBase()}
          onPress={() => this.onPress()}>
          {this.props.children}
        </TouchableOpacity>
      );
    }

    return <View style={this.getStyleBase()}>{this.props.children}</View>;
  }
}
