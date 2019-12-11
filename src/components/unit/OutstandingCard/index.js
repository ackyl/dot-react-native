import React, {Component} from 'react';
import {View} from 'react-native';
import Style from './style';

import {TextBase} from '@app-components-base';
import {Field, Card, Spacer} from '@app-components-custom';

export default class OutstandingCard extends Component {
  componentDidMount() {}

  // ----------------------------------------

  _renderLeft() {
    const {amount} = this.props;

    return (
      <View style={Style.left}>
        <View style={Style.row}>
          <View style={Style.circle} />
          <View style={Style.outstanding}>
            <TextBase text={'Outstanding Payment'} fontSize={16} />
            <Spacer space={1} />
            <Field
              label={'31 July 2019'}
              value={amount}
              valueSize={26}
              currency
            />
          </View>
        </View>
      </View>
    );
  }

  // ----------------------------------------

  _renderRight() {
    return (
      <View style={Style.right}>
        <View style={Style.drop} />
      </View>
    );
  }

  // ----------------------------------------

  render() {
    return (
      <Card
        background={'white'}
        marginH={16}
        marginV={8}
        padding={16}
        paddingVertical={20}>
        <View style={Style.row}>
          {this._renderLeft()}
          {this._renderRight()}
        </View>
      </Card>
    );
  }
}
