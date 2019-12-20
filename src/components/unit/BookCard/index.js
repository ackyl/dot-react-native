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
        <TextBase
          text={title}
          fontSize={this.getFontSize(title)}
          color={'white'}
          bold
        />
      </View>
    );
  }

  // ----------------------------------------

  _renderContent() {
    return (
      <View style={Style.left}>
        <TextBase
          text={
            'Your account has been suspended because payment overdue, please pay this immedietly or call us for more information'
          }
          fontSize={14}
          color={'white'}
          numberOfLines={3}
        />
      </View>
    );
  }

  // ----------------------------------------

  render() {
    return (
      <Card
        background={'red'}
        borderTR={12}
        borderTL={12}
        borderColor={'white'}
        marginBottom={12}
        marginH={16}
        padding={12}>
        {this._renderTitle()}
      </Card>
    );
  }
}
