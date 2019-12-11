import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Style from './style';

import {TextBase} from '@app-components-base';
import {Field, Card} from '@app-components-custom';

export default class ReceivedCard extends Component {
  componentDidMount() {}

  // ----------------------------------------

  _renderLeft() {
    const {received} = this.props;
    return (
      <View style={Style.left}>
        <Field label={'Payment Received'} value={received} light />
      </View>
    );
  }

  // ----------------------------------------

  _renderRight() {
    return (
      <View style={Style.right.container}>
        <View style={Style.right.button}>
          <TextBase text={'Learn More'} fontSize={14} color={'white'} />
        </View>
      </View>
    );
  }

  // ----------------------------------------

  render() {
    return (
      <Card background={'grey'} margin={16} padding={16} paddingVertical={20}>
        <View style={Style.row}>
          {this._renderLeft()}
          {this._renderRight()}
        </View>
      </Card>
    );
  }
}
