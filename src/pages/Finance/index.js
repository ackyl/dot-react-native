import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import Style from './style';

import {
  BalanceCard,
  ReceivedCard,
  OutstandingCard,
  OverdueCard,
  InvoiceCard,
} from '@app-components-unit';

export default class Finance extends Component {
  componentDidMount() {}

  // ----------------------------------------

  render() {
    return (
      <ScrollView style={Style.main} contentInsetAdjustmentBehavior="automatic">
        <BalanceCard
          account={'DIMAS_ACKYL'}
          balance={50000000}
          limit={5000000}
          exposure={500000}
        />

        <OverdueCard />

        <ReceivedCard received={1000000} />

        <OutstandingCard amount={1000000} />

        <InvoiceCard />
      </ScrollView>
    );
  }
}
