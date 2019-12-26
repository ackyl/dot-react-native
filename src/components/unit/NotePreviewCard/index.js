import React, {Component} from 'react';
import {View} from 'react-native';
import Style from './style';

import {TextBase} from '@app-components-base';
import {Card, Spacer, Button} from '@app-components-custom';

export default class NotePreviewCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heights: [],
    };
  }

  // ----------------------------------------

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props !== nextProps) {
      return true;
    }

    // if (this.state !== nextState) {
    //   return true;
    // }

    return false;
  }

  // ----------------------------------------

  saveHeight(height) {
    let newHeights = this.state.heights;
    newHeights.push(height);
    this.setState({heights: newHeights});
  }

  // ----------------------------------------

  _renderTitle() {
    const {title} = this.props;
    return (
      <View>
        <TextBase
          text={title}
          fontSize={18}
          color={'white'}
          numberOfLines={1}
          bold
        />
      </View>
    );
  }

  // ----------------------------------------

  _renderContent() {
    const {content} = this.props;
    return (
      <View>
        <TextBase
          text={content}
          fontSize={14}
          color={'white'}
          numberOfLines={8}
        />
      </View>
    );
  }

  // ----------------------------------------

  getHeight(height) {
    const {getHeight} = this.props;
    if (getHeight) {
      getHeight(height);
    }
  }

  // ----------------------------------------

  render() {
    return (
      <Card
        borderWidth={1}
        borderRadius={8}
        borderColor={'white'}
        margin={8}
        padding={16}
        getHeight={height => this.getHeight(height)}
        width={190}>
        <Spacer>
          {this._renderTitle()}
          <Spacer space={1.5} />
          {this._renderContent()}
        </Spacer>
      </Card>
    );
  }
}
