import React from 'react';
import {View, Button, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function App(){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione o modo de Login: </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.newText}>Facebook</Text>
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
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  newText: {
    color: '#FFFF',
  },
  button: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#548',
    borderRadius: 4,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
