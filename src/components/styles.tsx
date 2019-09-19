import React from 'react';
import { StyleSheet } from 'react-native';

const de = StyleSheet.create({
  bug: {
    borderColor: 'red',
    borderWidth: 5,
  },
});

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    height: '94%',
    backgroundColor: 'grey',
  },
  listItem: {
    ...de.bug,
    width: '100%',
    height: 60,
  },
  listItemText: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'sans-serif',
  },
});

export default styles;
