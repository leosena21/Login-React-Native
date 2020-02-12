import React, { useState } from 'react';

import {View, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import getRealm from '../services/realm';
import { checkPropTypes } from 'prop-types';

// import { Container } from './styles';

export default function LoginPasswd() {

  const [userEmail, setuserEmail] = useState('');
  const [pass, setpass] = useState('');  
  
  async function check(){

    const realm = await getRealm();
    let users = realm.objects('users');
    let filtred = users.filtered('user="'+userEmail+'" AND pass="'+pass+'"');
    if(filtred.length>0){
      console.log('loged');
      alert("Logado");
    }
    else{
      console.log('fail log');
      alert("Falha ao logar");
    }

  }
  
  async function Validation(){
    try{
      await check();
      console.log('checkOK');
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Login</Text>
      <TextInput 
        style={styles.input}
        placeholder="Informe o usuario"
        value={userEmail}
        onChangeText={setuserEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Informe o senha"
        value={pass}
        onChangeText={setpass}
      />

      <TouchableOpacity onPress={Validation} style={styles.button}>
        <Text style={styles.text} >Realizar Login</Text>
      </TouchableOpacity>
    </View>
  );
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
