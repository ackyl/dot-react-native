import React from 'react';
import {Scene, Router, Stack} from 'react-native-router-flux';
import {Home} from '@app-pages';

const App = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene
          key="home"
          component={Home}
          initial
          navigationBarStyle={{backgroundColor: 'black'}}
          titleStyle={{color: 'white', fontWeight: 'bold', fontSize: 24}}
          hideNavBar
        />
      </Stack>
    </Router>
  );
};

export default App;
