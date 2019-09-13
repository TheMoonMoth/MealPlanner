import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavBar } from './src/Header';

export default function App() {
  return (
    <>
      <View style={styles.headSlug} />
      <View style={styles.container}>
        <NavBar />
        <Text>More bullshit</Text>
        <Text>More bullshit</Text>
        <Text>More bullshit</Text>
        <Text>More bullshit</Text>
        <Text>More bullshit</Text>
        <Text>More bullshit</Text>
        <Text>More bullshit</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  headSlug: {
    height: 25,
    width: '100%',
    backgroundColor: 'grey',
  },
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
