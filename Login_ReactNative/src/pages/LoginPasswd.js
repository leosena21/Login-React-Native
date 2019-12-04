import React, { Component } from 'react';

import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

// import { Container } from './styles';

export default function LoginPasswd(){
  return (
    <View>
      <TextInput
        placeholder="Informe o usuario"
      />

      <TextInput
        placeholder="Informe o usuario"
      />

      <TouchableOpacity>
        <Text >Realizar Login</Text>
      </TouchableOpacity>
    </View>
  );
}
