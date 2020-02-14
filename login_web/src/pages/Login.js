import React, { useState, useEffect } from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {styles} from '../StyleSheet/LoginCSS';

import { useIndexedDB } from 'react-indexed-db';


export default function Login() {
  
  const [user, setuser] = useState('');
  const [pass, setpass] = useState('');  
  
  function Validation() {
    const { getByIndex } = useIndexedDB('usuarios');

    getByIndex("user", "teste").then(
      event => {
        console.log(event);
        //history.goBack();
      },
      error => {
        console.log(error);
      }
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Login</Text>
      <TextInput 
        style={styles.input}
        placeholder="Informe o usuario"
        value={user}
        onChangeText={setuser}
      />

      <TextInput
        style={styles.input}
        placeholder="Informe o senha"
        value={pass}
        onChangeText={setpass}
      />

      <TouchableOpacity onPress={Validation} style={styles.redbutton}>
        <Text style={styles.text} >Realizar Login</Text>
      </TouchableOpacity>
    </View>
  );
}
