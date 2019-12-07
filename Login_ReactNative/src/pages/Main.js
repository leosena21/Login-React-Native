import React, { Component } from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';



export default class Main extends Component {
  render(){
    return (
      <View>

        <Text style={styles.title}>Selecione o modo de Login: </Text>

        <TouchableOpacity style={styles.buttonFacebook}>
          <Text style={styles.newText}>Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonDigital}>
          <Text style={styles.newText}>Digital</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginPasswd')} style={styles.buttonPassword}>
          <Text style={styles.newText}>Senha</Text>
        </TouchableOpacity>

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
          onLogoutFinished={() => console.log("logout.")}/>

      </View>
    )
  }
}

function handleLogin(){
  
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
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  newText: {
    color: '#FFFF',
  },
  buttonFacebook: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#548',
    borderRadius: 4,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDigital: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#FF3C33',
    borderRadius: 4,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPassword: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#64BC05',
    borderRadius: 4,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
