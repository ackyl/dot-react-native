import React, {Component} from 'react';
import {View, SafeAreaView} from 'react-native';
import Style from './style';

import {TextBase} from '@app-components-base';
import {DrawerItemFragment} from '@app-components-unit';
import {Card, Spacer, Button} from '@app-components-custom';

import {LOREM_IPSUM, DATA} from './consts';

export default class DrawerFragment extends Component {
  // ----------------------------------------

  _renderList(data) {
    const itemRenders = [];

    data.map((item, index) => {
      itemRenders.push(this._renderItem(item, index));
    });

    return itemRenders;
  }

  // ----------------------------------------

  _renderItem(item, index) {
    return (
      <View key={index}>
        <DrawerItemFragment selected={item.selected} />
      </View>
    );
  }

  // ----------------------------------------

  render() {
    return (
      <View style={{backgroundColor: '#212121', width: '100%', height: '100%'}}>
        <SafeAreaView>
          <View style={{marginLeft: 16, marginTop: 8}}>
            <TextBase text={'Google Keep'} color={'white'} fontSize={20} bold />
          </View>
          <Spacer space={2} />
          {this._renderList(DATA)}
        </SafeAreaView>
      </View>
    );
  }
}
