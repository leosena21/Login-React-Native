import {createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from './pages/Main';
import LoginPasswd from './pages/LoginPasswd';
import Logado from './pages/Loged';

export default createAppContainer(
  createSwitchNavigator({
    Main,
    LoginPasswd,
    Logado,
  }),
);