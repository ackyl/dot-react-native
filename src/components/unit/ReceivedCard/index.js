import React, {Component} from 'react';
import {View} from 'react-native';
import Style from './style';

import {TextBase} from '@app-components-base';
import {Field, Card, Button} from '@app-components-custom';

export default class ReceivedCard extends Component {
  componentDidMount() {}

  // ----------------------------------------

  _renderLeft() {
    const {received} = this.props;
    return (
      <View style={Style.left}>
        <Field label={'Payment Received'} value={received} light currency />
      </View>
    );
  }

  // ----------------------------------------

  _renderRight() {
    return (
      <View style={Style.right.container}>
        <Button label={'Learn More'} />
      </View>
    );
  }

  // ----------------------------------------

  render() {
    return (
      <Card
        background={'grey'}
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
