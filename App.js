import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';
import {BalanceCard, ReceivedCard} from '@app-components';

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

          <ReceivedCard received={1000000} />
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
