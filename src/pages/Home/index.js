/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {ScrollView, FlatList, View, SafeAreaView} from 'react-native';
import Style from './style';
import {LOREM_IPSUM, DATA} from './consts';
import {Spacer} from '@app-components-custom';

import {TextBase} from '@app-components-base';
import {NotePreviewCard} from '@app-components-unit';

export default class Home extends Component {
  _renderHeader() {
    return (
      <View
        style={{
          marginTop: 16,
          flex: 1,
          height: 40,
          backgroundColor: 'grey',
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
              backgroundColor: 'red',
            }}
          />
        </View>
        <View style={{flex: 4, justifyContent: 'center'}}>
          <TextBase text={'Search your notes'} fontSize={16} />
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              height: 24,
              width: 24,
              borderRadius: 16,
              backgroundColor: 'red',
            }}
          />
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              height: 24,
              width: 24,
              borderRadius: 16,
              backgroundColor: 'red',
            }}
          />
        </View>
      </View>
    );
  }

  // ----------------------------------------

  _renderNotePreviewList() {
    const arrangedData = [];
    const itemRenders = [];
    const middle = Math.ceil(DATA.length / 2);

    for (let x in DATA) {
      arrangedData.push(' ');
    }

    let rightOrder = middle;
    let leftOrder = 0;

    for (let x in DATA) {
      if (x % 2 === 0) {
        arrangedData[leftOrder] = DATA[x];
        leftOrder++;
      } else {
        arrangedData[rightOrder] = DATA[x];
        rightOrder++;
      }
    }

    arrangedData.map((item, index) => {
      itemRenders.push(this._renderNotePreviewCards(item, index));
    });

    return itemRenders;
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
      <View
        style={{
          flex: -1,
        }}
        key={index}>
        <NotePreviewCard
          title={item.title}
          content={item.content}
          label={item.label ? item.label : null}
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
          backgroundColor: 'grey',
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

  render() {
    const middle = Math.ceil(DATA.length / 2);
    const height = middle * 220;

    const leftData = [];
    const rightData = [];

    for (let x in DATA) {
      if (x == DATA.length - 1 && DATA.length > 2) {
        const leftConSum = leftData
          .map(o => o.content.length)
          .reduce((a, c) => {
            const b = a > 180 ? 180 : a;
            const d = c > 180 ? 180 : c;
            return b + d;
          });

        const rightConSum = rightData
          .map(o => o.content.length)
          .reduce((a, c) => {
            const b = a > 180 ? 180 : a;
            const d = c > 180 ? 180 : c;
            return b + d;
          });

        if (leftConSum > rightConSum) {
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

    return (
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
      <View>
        <SafeAreaView>
          <ScrollView style={{backgroundColor: 'black'}}>
            {this._renderHeader()}
            <View style={{marginTop: 16, flexDirection: 'row'}}>
              <View style={{flex: 1}}>{this._renderList(leftData)}</View>
              <View style={{flex: 1}}>{this._renderList(rightData)}</View>
            </View>
          </ScrollView>
          {this._renderFooter()}
        </SafeAreaView>
      </View>
    );
  }
}
