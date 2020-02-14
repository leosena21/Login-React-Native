import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import logo from '../images/logo192.png';
import {styles} from '../StyleSheet/MainCSS';

function App({history}) {
  return (
    <View style={styles.container}>

      <Image 
        style={{
          width: 70, height: 70}}
          source={logo}
      />

      <Text style={styles.title}>Selecione o modo de Login: </Text>

      <TouchableOpacity /*onPress={this.handleClick}*/ style={styles.buttonDigital}>
        <Text style={styles.newText}>Digital</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => history.push('Login')} style={styles.buttonPassword}>
        <Text style={styles.newText}>Senha</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => history.push('Cadastro')}  style={styles.buttonCad}>
        <Text style={styles.newText}>Cadastro Senha</Text>
      </TouchableOpacity>

    </View>

  );
}

export default App;
