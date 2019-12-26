import React, {Component} from 'react';
import {View} from 'react-native';
import Style from './style';

import {TextBase} from '@app-components-base';
import {Card, Spacer, Button} from '@app-components-custom';

export default class BookCard extends Component {
  componentDidMount() {}

  // ----------------------------------------

  getFontSize(text: string) {
    let size;
    let textLength = text.length;

    if (textLength < 30) {
      size = 24;
    } else if (textLength < 60) {
      size = 16;
    } else {
      size = 12;
    }

    return size;
  }

  // ----------------------------------------

  _renderTitle() {
    const {title} = this.props;

    return (
      <View style={Style.left}>
        <TextBase text={title} fontSize={20} color={'white'} bold />
      </View>
    );
  }

  // ----------------------------------------

  render() {
    return (
      <Card
        background={'white'}
        borderWidth={0.5}
        borderColor={'white'}
        borderRadius={8}
        marginBottom={12}
        marginH={16}
        paddingLeft={8}>
        <Card
          background={'black'}
          borderWidth={1}
          borderColor={'white'}
          borderTR={8}
          borderBR={8}
          padding={12}>
          {this._renderTitle()}
        </Card>
      </Card>
    );
  }
}
