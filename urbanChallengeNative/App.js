import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [text, onChangeText] = useState('Useless Text');
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
      <View style={styles.button}>
        <Button title='Join Game'></Button>
      </View>
      <View style={styles.button}>
        <Button title='Create Game'></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495159',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'black',
    color: 'white'
  },
  button: {

  }
});
