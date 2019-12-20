import React, {Component} from 'react';
import {View} from 'react-native';
import Style from './style';

import {TextBase} from '@app-components-base';
import {Card, Spacer, Button} from '@app-components-custom';

export default class NotePreviewCard extends Component {
  componentDidMount() {}

  // ----------------------------------------

  _renderTitle() {
    return (
      <View style={Style.left}>
        <TextBase
          text={'You have overdue invoices'}
          fontSize={18}
          color={'white'}
          bold
        />
      </View>
    );
  }

  // ----------------------------------------

  _renderContent() {
    return (
      <View style={Style.left}>
        <TextBase
          text={
            'Your account has been suspended because payment overdue, please pay this immedietly or call us for more information'
          }
          fontSize={14}
          color={'white'}
          numberOfLines={3}
        />
      </View>
    );
  }

  // ----------------------------------------

  render() {
    return (
      <Card
        background={'clear'}
        borderWidth={1}
        borderColor={'white'}
        margin={8}
        padding={16}>
        <Spacer>
          {this._renderTitle()}
          <Spacer space={1.5} />
          {this._renderContent()}
        </Spacer>
      </Card>
    );
  }
}
