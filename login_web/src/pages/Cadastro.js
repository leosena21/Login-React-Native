import React, { useState } from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {styles} from '../StyleSheet/CadastroCSS';
import { dbConfig } from '../Database/DbConfig';

var dbCon = dbConfig();

export default function Cadastro({history}) {

  const [userName, setUserName] = useState('');
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  function AddMore() {
    try{
      dbCon.usuarios.add({name: userName, userLog: user, passwd: pass});
      history.goBack();
      console.log("Foi");
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
      secureTextEntry={true}
      multiline={false} 
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
