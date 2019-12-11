import React from 'react';
import {StyleSheet} from 'react-native';
import {Scene, Router, Stack} from 'react-native-router-flux';
import {Home, Finance} from '@app-pages';

const App = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="home" component={Home} />
        <Scene key="finance" component={Finance} title="Finance" initial />
      </Stack>
    </Router>
  );
};

export default App;
