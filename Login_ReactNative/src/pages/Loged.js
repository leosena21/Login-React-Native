import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';

import { LoginButton, AccessToken } from 'react-native-fbsdk';

import RequireId from '../auth/id';

// import { Container } from './styles';

export default class pages extends Component {
  
  state = { auth: false }

  render() {
      if( !this.state.auth ) return (<RequireId history=                  {this.props.history} handlePopupDismissed={() =>     this.setState({auth: true})} />)
    return (
     <View style={styles.container}>
       <Text style={styles.Text}>Login realizado com sucesso</Text>

       <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {            
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString());
                    this.props.navigation.navigate('Loged');
                }
                )
              }
            }
          }
          onLogoutFinished={
            () => console.log("logout.") | this.props.navigation.navigate('Main')
            }/>

     </View> 
    )
  }
}

const styles = StyleSheet.create({  
  
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
    margin:10,
    padding:20,
    marginHorizontal: 16,
  },

  Text: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 200,
    fontSize: 20,
  },
});