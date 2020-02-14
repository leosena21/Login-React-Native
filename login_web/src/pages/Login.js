import React, { useState, useEffect } from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {styles} from '../StyleSheet/LoginCSS';

import { dbConfig } from '../Database/DbConfig';

var dbCon = dbConfig();
export default function Login() {
  
  const [user, setuser] = useState('');
  const [pass, setpass] = useState('');  

  function Validation() {
    try{
      dbCon.usuarios.where({userLog: user, passwd: pass}).first(usuario => {
        if(JSON.stringify(usuario)!=null){
          console.log("Login_OK");
        }
        else{
          console.log("Usuario/Senha incorretos");
        }
      });
    }
    catch(err){
      console.log("Login_ERRO" + err);
    }
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
