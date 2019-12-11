import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Style from './style';
import {TextBase} from '@app-components-base';

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
      <View style={Style.middle.container}>
        <TextBase text={'Remaining Balance'} fontSize={12} color={'rgba(15, 24, 33, 0.45)'} />

        <View style={Style.middle.margin} />

        <TextBase
          text={`IDR ${balance.toLocaleString()}`}
          fontSize={32}
          fontWeight={'bold'}
        />
      </View>
    );
  }

  // ----------------------------------------

  _renderBottom() {
    const {limit, exposure} = this.props;

    return (
      <View style={Style.row}>
        {this._renderBottomText('Credit Limit', limit)}

        <View style={Style.vLine} />

        {this._renderBottomText('Credit Exposure', exposure)}
      </View>
    );
  }

  // ----------------------------------------

  _renderBottomText(title, amount) {
    return (
      <View style={Style.bottom.container}>
        <TextBase text={title} fontSize={12} color={'rgba(15, 24, 33, 0.45)'} />

        <View style={Style.bottom.margin} />

        <TextBase
          text={`IDR ${amount.toLocaleString()}`}
          fontSize={18}
          fontWeight={'bold'}
        />
      </View>
    );
  }

  // ----------------------------------------

  render() {
    return (
      <View style={Style.card}>
        <View>
          {this._renderTop()}

          {this._renderMiddle()}

          <View style={Style.hLine} />

          {this._renderBottom()}
        </View>
      </View>
    );
  }
}
