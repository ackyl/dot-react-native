import React, {Component} from 'react';
import {View} from 'react-native';
import Style from './style';

import {TextBase} from '@app-components-base';
import {Card, Spacer, Button} from '@app-components-custom';

export default class NotePreviewCard extends Component {
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

  _renderLabel(item) {
    return (
      <Card
        marginRight={8}
        borderWidth={1}
        marginTop={8}
        borderRadius={12}
        borderColor={'grey'}
        padding={6}>
        <TextBase text={item} color={'white'} fontSize={12} />
      </Card>
    );
  }

  // ----------------------------------------

  _renderLabels() {
    const {label} = this.props;
    const itemLabel = [];
    if (label) {
      label.map(item => itemLabel.push(this._renderLabel(item)));
    }

    return itemLabel;
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
    const {label} = this.props;
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
          <Spacer row wrap>
            {this._renderLabels()}
          </Spacer>
        </Spacer>
      </Card>
    );
  }
}
