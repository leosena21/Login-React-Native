import React, { Component } from 'react';

import {View, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

// import { Container } from './styles';

export default class LoginPasswd extends Component{

  constructor(props){
    super(props);
    this.state = {
      userEmail: "",
      posts: {}
    };
  };

  upd = () => {

      fetch('https://planetaaguaba.com/Testephp/teste.php',{
			method:'POST',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
        // we will pass our input data to server
        
				email_user: this.state.userEmail
			})
			
		})
		.then((response) => response.json())
    .then(res => {
      this.setState({
          ...this.state, // Not required but just a heads up on using mutation
          posts: res //Não é necessario isso aqui, mas é valido para guardar informações futuras
      })

      if(res.retorno=='CADASTRADO'){
        this.popup(this.props.navigation.push('Loged'));
      }
      else{
        this.popup();
      }
  })
  .catch((error => {
      console.error(error);
  }));
  }

  popup(test){
    // Works on both Android and iOS
    Alert.alert(
      'Informação',
      this.state.posts.retorno,
      [
        {text: 'OK', onPress: () => test},
      ],
      {cancelable: false},
    );
  }
    
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.title}> {this.state.posts.retorno}</Text>
        <TextInput 
          style={styles.input}
          placeholder="Informe o usuario"
          onChangeText={userEmail => this.setState({userEmail})}
        />

        <TextInput
          style={styles.input}
          placeholder="Informe o senha"
          onChangeText={userPassword => this.setState({userPassword})}
        />

        <TouchableOpacity onPress={() => this.upd()} style={styles.button}>
          <Text style={styles.text} >Realizar Login</Text>
        </TouchableOpacity>
      </View>
    );
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

  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 13,
    marginVertical: 8,
    color: '#FFF',
  },
  
  input: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 15,
  },

  button: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#DF4723',
    borderRadius: 4,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

});
