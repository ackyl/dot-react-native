import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';

import {
  BalanceCard,
  ReceivedCard,
  OutstandingCard,
  OverdueCard,
  InvoiceCard,
} from '@app-components-unit';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.main}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">

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
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'black',
  },
});

export default App;
