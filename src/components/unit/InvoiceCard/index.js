import React, {Component} from 'react';
import {View} from 'react-native';
import Style from './style';

import {TextBase} from '@app-components-base';
import {Field, Card, Spacer, Button} from '@app-components-custom';

export default class InvoiceCard extends Component {
  componentDidMount() {}

  // ----------------------------------------

  _renderLeft() {
    const {amount} = this.props;

    return (
      <View style={Style.left}>
        <View style={Style.row}>
          <View style={Style.circle} />
          <View style={Style.outstanding}>
            <TextBase text={'Invoices'} fontSize={16} />
            <Spacer space={1} />
            <TextBase
              text={'22 Jun 2019 - 22 Jul 2019'}
              fontSize={12}
              color={'rgba(15, 24, 33, 0.45)'}
            />
          </View>
        </View>
      </View>
    );
  }

  // ----------------------------------------

  _renderRight() {
    return (
      <View style={Style.right}>
        <Button label={'See All'} background={'grey'} color={'black'} />
      </View>
    );
  }

  // ----------------------------------------

  render() {
    return (
      <Card
        background={'white'}
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
