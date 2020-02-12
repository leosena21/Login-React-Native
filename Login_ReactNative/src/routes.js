import Main from './pages/Main';
import LoginPasswd from './pages/LoginPasswd';
import Loged from './pages/Loged';
import FingerprintPopup from './auth/id'
import CadastroSenha from './pages/CadastroSenha';


import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: Main,
    LoginPasswd: LoginPasswd,
    Loged: Loged,
    FingerprintPopup: FingerprintPopup,
    CadastroSenha: CadastroSenha,
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);