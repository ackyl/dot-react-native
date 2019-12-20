import React, {Component} from 'react';
import {ScrollView, Text} from 'react-native';
import {View} from 'react-native';
import Style from './style';
import {Card, Spacer, Button} from '@app-components-custom';

import {TextBase} from '@app-components-base';

import {NotePreviewCard, BookCard, BoardCard} from '@app-components-unit';
import MaskedView from '@react-native-community/masked-view';

import LinearGradient from 'react-native-linear-gradient';

export default class Home extends Component {
  componentDidMount() {}

  // ----------------------------------------

  _renderNavBar() {
    return (
      <Spacer row alignItems={'center'}>
        <Spacer flex={1} alignItems={'center'}>
          <MaskedView
            maskElement={
              <View
                style={{
                  // Transparent background because mask is based off alpha channel.
                  backgroundColor: 'transparent',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: 'white',
                    fontWeight: 'bold',
                  }}>
                  Boards
                </Text>
              </View>
            }>
            <LinearGradient
              colors={['#242424', 'white']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              locations={[0, 0.8]}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'white',
                  fontWeight: 'bold',
                  opacity: 0,
                }}>
                Boards
              </Text>
            </LinearGradient>
          </MaskedView>
        </Spacer>

        <Spacer flex={1} alignItems={'center'}>
          <TextBase text={'Home'} color={'white'} fontSize={24} bold />
        </Spacer>

        <Spacer flex={1} alignItems={'center'}>
          <MaskedView
            maskElement={
              <View
                style={{
                  // Transparent background because mask is based off alpha channel.
                  backgroundColor: 'transparent',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: 'white',
                    fontWeight: 'bold',
                  }}>
                  Books
                </Text>
              </View>
            }>
            <LinearGradient
              colors={['white', '#ffffff00']}
              start={{x: 0, y: 0}}
              end={{x: 1.2, y: 0}}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'white',
                  fontWeight: 'bold',
                  opacity: 0,
                }}>
                Books
              </Text>
            </LinearGradient>
          </MaskedView>
        </Spacer>
      </Spacer>
    );
  }

  // ----------------------------------------

  render() {
    return (
      <ScrollView style={Style.main} contentInsetAdjustmentBehavior="automatic">
        <Spacer space={4} top={2}>
          {this._renderNavBar()}
        </Spacer>

        <Spacer>
          <BookCard title={'Book of Sadism'} />
        </Spacer>

        <Spacer>
          <BookCard title={'Book of Lorem Ipsum Dolor Si Amet'} />
        </Spacer>

        <Spacer>
          <BoardCard
            title={
              '1. Lorem Ipsum Dolor si Amet Lorem Ipsum Dolor si Amet\n2.Lorem Ipsum Dolor si Amet Lorem ipsum'
            }
          />
        </Spacer>
      </ScrollView>
    );
  }
}
