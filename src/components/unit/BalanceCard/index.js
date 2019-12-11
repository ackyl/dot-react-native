import React, {Component} from 'react';
import {View} from 'react-native';
import Style from './style';

import {TextBase} from '@app-components-base';
import {Field, Card} from '@app-components-custom';

export default class BalanceCard extends Component {
  componentDidMount() {}

  // ----------------------------------------

  _renderTop() {
    const {account} = this.props;

    return (
      <View style={Style.top.container}>
        <View style={Style.top.account}>
          <TextBase
            text={`ACCOUNT : ${account}`}
            fontSize={12}
            fontWeight={'bold'}
          />
        </View>
        <View style={Style.top.box}>
          <View style={Style.top.status}>
            <TextBase
              text={'SUSPEND'}
              fontSize={10}
              fontWeight={'800'}
              color={'white'}
            />
          </View>
        </View>
      </View>
    );
  }

  // ----------------------------------------

  _renderMiddle() {
    const {balance} = this.props;

    return (
      <View style={Style.middle}>
        <Field label={'Remaining Balance'} value={balance} valueSize={32} />
      </View>
    );
  }

  // ----------------------------------------

  _renderBottom() {
    const {limit, exposure} = this.props;

    return (
      <View style={Style.row}>
        <View style={Style.bottom}>
          <Field label={'Credit Limit'} value={limit} />
        </View>

        <View style={Style.vLine} />

        <View style={Style.bottom}>
          <Field label={'Credit Exposure'} value={exposure} />
        </View>
      </View>
    );
  }

  // ----------------------------------------

  render() {
    return (
      <Card background={'yellow'} margin={16}>
        {this._renderTop()}

        {this._renderMiddle()}

        <View style={Style.hLine} />

        {this._renderBottom()}
      </Card>
    );
  }
}
