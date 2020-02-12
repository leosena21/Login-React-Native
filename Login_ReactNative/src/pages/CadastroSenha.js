import React, { useState } from 'react';
import getRealm from '../services/realm';
import {View, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function pages(){
  
  const [userName, setUserName] = useState('');
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  
  async function saveRepository(){
    const dataUser = {
      id: new Date().getTime(),
      name: userName,
      user: user,
      pass: pass,
    };
    const realm = await getRealm();
    
    realm.write(() => {
      realm.create('users', dataUser);
    });
  }

  async function handleClick(){
    try{
      console.log(userName);
      
      await saveRepository();
      
      console.log('FOI');

      setPass('');
      setUser('');
      setUserName('');
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <View style={styles.container}>
    <Text style={styles.title}> Cadastro </Text>

    <TextInput 
      style={styles.input}
      placeholder="Informe o nome completo"
      value={userName}
      onChangeText={setUserName}
    />

    <TextInput 
      style={styles.input}
      placeholder="Informe o usuario"
      value={user}
      onChangeText={setUser}
    />

    <TextInput
      style={styles.input}
      placeholder="Informe o senha"
      value={pass}
      onChangeText={setPass}
    />

    <TouchableOpacity onPress={handleClick} style={styles.button}>
      <Text style={styles.text} >Cadastrar</Text>
    </TouchableOpacity>
  </View>
  )
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
    backgroundColor: '#72C7E9',
    borderRadius: 4,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

});
