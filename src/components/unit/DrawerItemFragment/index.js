import React, {Component} from 'react';
import {View, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import Style from './style';

import {TextBase} from '@app-components-base';
import {Card, Spacer, Button} from '@app-components-custom';

export default class DrawerItemFragment extends Component {
  render() {
    const {selected} = this.props;

    const bg = selected ? '#827717' : null;

    return (
      <TouchableOpacity
        style={{
          backgroundColor: bg,
          borderTopRightRadius: 24,
          borderBottomRightRadius: 24,
          paddingVertical: 8,
          marginRight: 8,
          flexDirection: 'row',
        }}>
        <View
          style={{
            height: 24,
            width: 24,
            borderRadius: 16,
            backgroundColor: 'white',
            alignItems: 'center',
            marginLeft: 16,
          }}
        />
        <TextBase
          text={'Lorem Ipsum'}
          color={'white'}
          marginLeft={16}
          fontSize={14}
          fontWeight={'600'}
          textAlign={'center'}
        />
      </TouchableOpacity>
    );
  }
}
