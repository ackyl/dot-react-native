import React, {Component} from 'react';
import {View} from 'react-native';
import Style from './style';

import {TextBase} from '@app-components-base';
import {Card, Spacer, Button} from '@app-components-custom';

export default class OverdueCard extends Component {
  componentDidMount() {}

  // ----------------------------------------

  _renderLeft() {
    return (
      <View style={Style.left}>
        <TextBase
          text={'You have overdue invoices'}
          fontSize={16}
          color={'white'}
        />

        <Spacer space={1} />

        <TextBase
          text={
            'Your account has been suspended because payment overdue, please pay this immedietly or call us for more information'
          }
          fontSize={12}
          color={'rgba(255, 255, 255, 0.4)'}
        />

        <Spacer space={2} />

        <Spacer row>
          <Button label={'Call Us'} background={'yellow'} color={'black'} />

          <Spacer left={1} />

          <Button label={'Show Invoices'} />
        </Spacer>
      </View>
    );
  }

  // ----------------------------------------

  _renderRight() {
    return <View style={Style.icon} />;
  }

  // ----------------------------------------

  render() {
    return (
      <Card
        background={'grey'}
        marginH={16}
        marginV={8}
        padding={16}
        paddingVertical={20}>
        <View style={Style.row}>
          {this._renderLeft()}
          {this._renderRight()}
        </View>
      </Card>
    );
  }
}
