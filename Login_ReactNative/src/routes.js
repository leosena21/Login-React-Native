import {createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from './pages/Main';
import LoginPasswd from './pages/LoginPasswd';
import Loged from './pages/Loged';

export default createAppContainer(
  createSwitchNavigator({
    Main,
    LoginPasswd,
    Loged,
  }),
);