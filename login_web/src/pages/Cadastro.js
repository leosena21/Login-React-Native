import React, { useState } from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

import {styles} from '../StyleSheet/CadastroCSS';
import { useIndexedDB } from 'react-indexed-db';

// import { Container } from './styles';

export default function Cadastro({history}) {

  const [userName, setUserName] = useState('');
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  function AddMore() {
    const { add } = useIndexedDB('usuarios');

    add({ name: {userName}, user: {user}, pass: {pass} }).then(
      event => {
        history.goBack();
      },
      error => {
        console.log(error);
      }
    );
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
    <View style={styles.flexed} >
      <TouchableOpacity onPress={() => history.goBack()} style={styles.redbutton}>
        <Text style={styles.text} >Voltar</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={AddMore} style={styles.bluebutton}>
        <Text style={styles.text} >Cadastrar</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
}
