import {createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from './pages/Main';
import Logado from './pages/Loged';

export default createAppContainer(
  createSwitchNavigator({
    Main,
    Logado,
  })
);