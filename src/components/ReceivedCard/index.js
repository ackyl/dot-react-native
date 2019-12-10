import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Style from './style';

export default class ReceivedCard extends Component {
  componentDidMount() {}

  // ----------------------------------------

  _renderLeft() {
    const {received} = this.props;
    return (
      <View style={Style.left.container}>
        <Text style={Style.left.label}>Payment Received</Text>
        <Text style={Style.left.value}>IDR {received}</Text>
      </View>
    );
  }

  // ----------------------------------------

  _renderRight() {
    return (
      <View style={Style.right.container}>
        <View style={Style.right.button}>
          <Text style={Style.right.label}>Learn More</Text>
        </View>
      </View>
    );
  }

  // ----------------------------------------

  render() {
    return (
      <View style={Style.card}>
        <View style={Style.row}>
          {this._renderLeft()}
          {this._renderRight()}
        </View>
      </View>
    );
  }
}
