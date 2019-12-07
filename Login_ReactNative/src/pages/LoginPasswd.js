import React, { Component } from 'react';

import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

// import { Container } from './styles';

export default function LoginPasswd(){
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Realize Login</Text>
      <TextInput 
        style={styles.input}
        placeholder="Informe o usuario"
      />

      <TextInput
        style={styles.input}
        placeholder="Informe o senha"
      />

      <TouchableOpacity style={styles.button}>
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
