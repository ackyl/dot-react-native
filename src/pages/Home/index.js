/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  ScrollView,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Style from './style';
import {LOREM_IPSUM, DATA} from './consts';
import {Spacer} from '@app-components-custom';

import {TextBase} from '@app-components-base';
import {NotePreviewCard} from '@app-components-unit';
import {Actions} from 'react-native-router-flux';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      mode: 1,
    };
  }

  // ----------------------------------------

  getSortedData() {
    // hitungan masih belom ngitung panjang ketika ada tag

    const leftData = [];
    const rightData = [];
    const data = [];

    for (let x in DATA) {
      if (x == DATA.length - 1 && DATA.length > 2 && DATA.length % 2 == 1) {
        const leftContentSum = leftData
          .map(o => o.content.length)
          .reduce((a, c) => {
            const b = a > 180 ? 180 : a;
            const d = c > 180 ? 180 : c;
            return b + d;
          });

        const rightContentSum = rightData
          .map(o => o.content.length)
          .reduce((a, c) => {
            const b = a > 180 ? 180 : a;
            const d = c > 180 ? 180 : c;
            return b + d;
          });

        if (leftContentSum > rightContentSum) {
          rightData.push(DATA[x]);
        } else {
          leftData.push(DATA[x]);
        }
      } else if (x % 2 === 0) {
        leftData.push(DATA[x]);
      } else {
        rightData.push(DATA[x]);
      }
    }

    data.push(leftData);
    data.push(rightData);

    return data;
  }

  // ----------------------------------------

  changeMode() {
    let mode = 0;

    if (this.state.mode === 1) {
      mode = 2;
    } else {
      mode = 1;
    }

    this.setState({mode: mode});
  }

  // ----------------------------------------

  _renderHeader() {
    return (
      <View
        style={{
          marginTop: 16,
          flex: 1,
          height: 40,
          backgroundColor: '#2E2F33',
          marginHorizontal: 16,
          borderRadius: 8,
          flexDirection: 'row',
        }}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              height: 24,
              width: 24,
              borderRadius: 16,
              backgroundColor: 'white',
            }}
            onPress={() => Actions.drawerOpen()}
          />
        </View>
        <View style={{flex: 4, justifyContent: 'center'}}>
          <TextInput
            placeholder={'Search your notes'}
            placeholderTextColor={'rgba(255,255,255,0.4)'}
            color={'white'}
          />
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              height: 24,
              width: 24,
              borderRadius: 16,
              backgroundColor: 'white',
            }}
            onPress={() => this.changeMode()}
          />
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              height: 24,
              width: 24,
              borderRadius: 16,
              backgroundColor: 'white',
            }}
          />
        </View>
      </View>
    );
  }

  // ----------------------------------------

  _renderList(data) {
    const itemRenders = [];

    data.map((item, index) => {
      itemRenders.push(this._renderNotePreviewCards(item, index));
    });

    return itemRenders;
  }

  // ----------------------------------------

  _renderNotePreviewCards(item, index) {
    return (
      <View key={index}>
        <NotePreviewCard
          title={item.title}
          content={item.content}
          label={item.label ? item.label : null}
          onPress={() => console.log('Pressed')}
        />
      </View>
    );
  }

  // ----------------------------------------

  _renderFooter() {
    return (
      <View
        style={{
          height: 40,
          backgroundColor: '#2E2F33',
          flex: 1,
          width: '100%',
          position: 'absolute',
          bottom: 34,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        opacity={0.9}
      />
    );
  }

  // ----------------------------------------

  _renderButton() {
    <View
      style={{
        width: 90,
        height: 90,
        backgroundColor: 'red',
        position: 'absolute',
        bottom: 70,
      }}
    />;
  }

  // ----------------------------------------

  _renderSideBar() {
    return (
      <View
        style={{
          height: 50,
          backgroundColor: 'red',
          width: 25,
        }}
      />
    );
  }

  // ----------------------------------------

  render() {
    const {mode} = this.state;

    if (mode === 1) {
      const data = this.getSortedData();

      return (
        <View>
          <SafeAreaView>
            <ScrollView style={{backgroundColor: '#212121', minHeight: '100%'}}>
              {this._renderHeader()}
              <View style={{marginTop: 16, flexDirection: 'row'}}>
                <View style={{flex: 1}}>{this._renderList(data[0])}</View>
                <View style={{flex: 1}}>{this._renderList(data[1])}</View>
              </View>
            </ScrollView>
            {this._renderFooter()}
            {this._renderButton()}
          </SafeAreaView>
        </View>
      );
    } else {
      const data = DATA;

      return (
        <View>
          <SafeAreaView>
            <ScrollView style={{backgroundColor: '#212121', minHeight: '100%'}}>
              {this._renderHeader()}
              <View style={{marginTop: 16, flexDirection: 'row'}}>
                <View style={{flex: 1}}>{this._renderList(data)}</View>
              </View>
            </ScrollView>
            {this._renderFooter()}
          </SafeAreaView>
        </View>
      );
    }
  }
}
