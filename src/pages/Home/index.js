/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {ScrollView, View, SafeAreaView, TextInput} from 'react-native';
import Style from './style';
import {LOREM_IPSUM, DATA} from './consts';
import {Spacer} from '@app-components-custom';

import {TextBase} from '@app-components-base';
import {NotePreviewCard} from '@app-components-unit';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
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
          <View
            style={{
              height: 24,
              width: 24,
              borderRadius: 16,
              backgroundColor: 'white',
            }}
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
          <View
            style={{
              height: 24,
              width: 24,
              borderRadius: 16,
              backgroundColor: 'white',
            }}
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
          width: 500,
          position: 'absolute',
          bottom: 34,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{width: 20, height: 20, backgroundColor: 'red', opacity: 0}}
        />
      </View>
    );
  }

  // ----------------------------------------

  getSortedData() {
    const leftData = [];
    const rightData = [];
    const data = [];

    for (let x in DATA) {
      if (x == DATA.length - 1 && DATA.length > 2) {
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

  render() {
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
        </SafeAreaView>
      </View>
    );
  }
}

// const middle = Math.ceil(DATA.length / 2);
// const height = middle * 220;

// <ScrollView style={{height: '100%', backgroundColor: 'black'}}>
//   <View
//     style={{
//       flex: -1,
//       flexWrap: 'wrap',
//       height: height,
//       top: 45,
//     }}>
//     {this._renderNotePreviewList()}
//   </View>
// </ScrollView>

// _renderNotePreviewList() {
//   const arrangedData = [];
//   const itemRenders = [];
//   const middle = Math.ceil(DATA.length / 2);

//   for (let x in DATA) {
//     arrangedData.push(' ');
//   }

//   let rightOrder = middle;
//   let leftOrder = 0;

//   for (let x in DATA) {
//     if (x % 2 === 0) {
//       arrangedData[leftOrder] = DATA[x];
//       leftOrder++;
//     } else {
//       arrangedData[rightOrder] = DATA[x];
//       rightOrder++;
//     }
//   }

//   arrangedData.map((item, index) => {
//     itemRenders.push(this._renderNotePreviewCards(item, index));
//   });

//   return itemRenders;
// }
