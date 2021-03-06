import React, { Component } from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';


export default class Main extends Component {

  handleClick = () => {
    AccessToken.getCurrentAccessToken().then(
      (data) => {
        console.log(data.accessToken.toString());
        this.props.navigation.push('Loged');
      }
    ).catch(
      err => { alert("Sem logar") }
    )
  }

  render(){

    return (
      <View style={styles.container}>

        <Text style={styles.title}>Selecione o modo de Login: </Text>
        
        <LoginButton style={styles.buttonFacebook}
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
                  this.props.navigation.push('Loged');
                }
              )
            }
          }
        }
        onLogoutFinished={() => console.log("logout.")}/>  

        <TouchableOpacity onPress={this.handleClick} style={styles.buttonDigital}>
          <Text style={styles.newText}>Digital</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.push('LoginPasswd')} style={styles.buttonPassword}>
          <Text style={styles.newText}>Senha</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.push('CadastroSenha')} style={styles.buttonCad}>
          <Text style={styles.newText}>Cadastro Senha</Text>
        </TouchableOpacity>

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
  buttonCad: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#F88810',
    borderRadius: 4,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
