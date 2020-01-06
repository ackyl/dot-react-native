import React from 'react';
import {Scene, Router, Stack, Drawer} from 'react-native-router-flux';
import {Home} from '@app-pages';
import {DrawerFragment} from '@app-components-unit';

const App = () => {
  return (
    <Router>
      <Stack key="root">
        <Drawer
          hideNavBar
          key="drawer"
          contentComponent={DrawerFragment}
          drawerWidth={300}
          drawerPosition="left">
          <Scene key="home" component={Home} initial hideNavBar />
        </Drawer>
      </Stack>
    </Router>
  );
};

export default App;
