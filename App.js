import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [query, setQuery]=useState()
  
  return (
    <View style={styles.container}>
      <Text>{query}</Text>
      <StatusBar style="auto" />
      <TextInput style={styles.inputWraper} onChange={(e)=>setQuery(e.target.value)} type='text' value=''/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputWraper: {

    backgroundColor: 'green'
  }
});
