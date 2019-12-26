/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {ScrollView, FlatList, View} from 'react-native';
import Style from './style';
import {LOREM_IPSUM, DATA} from './consts';
import {Spacer} from '@app-components-custom';

import {NotePreviewCard} from '@app-components-unit';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heights: [],
    };
  }

  // ----------------------------------------

  getHeight(height) {
    let newHeights = this.state.heights;
    newHeights.push(height);
    this.setState({heights: newHeights});
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

  _renderNotePreviewCards(item) {
    return (
      <View
        style={{
          flex: -1,
        }}>
        <NotePreviewCard title={item.title} content={item.content} />
      </View>
    );
  }

  // ----------------------------------------

  render() {
    const middle = Math.ceil(DATA.length / 2);
    const height = middle * 220;

    return (
      <ScrollView style={{height: '100%', backgroundColor: 'black'}}>
        <View
          style={{
            flex: -1,
            flexWrap: 'wrap',
            height: height,
            top: 45,
          }}>
          {this._renderNotePreviewList()}
        </View>
      </ScrollView>
    );
  }
}
