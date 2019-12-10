import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Style from './style';

export default class BalanceCard extends Component {
  componentDidMount() {}

  // ----------------------------------------

  _renderTop() {
    const {account} = this.props;

    return (
      <View style={Style.top.container}>
        <Text style={Style.top.account}> ACCOUNT : {account} </Text>
        <View style={Style.top.box}>
          <Text style={Style.top.status}> SUSPEND </Text>
        </View>
      </View>
    );
  }

  // ----------------------------------------

  _renderMiddle() {
    const {balance} = this.props;

    return (
      <View style={Style.middle.container}>
        <Text style={Style.middle.label}>Remaining Balance</Text>
        <Text style={Style.middle.value}>IDR {balance}</Text>
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
        <Text style={Style.bottom.label}>{title}</Text>
        <Text style={Style.bottom.value}>IDR {amount}</Text>
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
