import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
  },
  title: {
    padding: 10,
    flex: 1,
  },
  menu: {
    position: 'absolute',
    top: 50,
    backgroundColor: 'blue',
    zIndex: 1,
  },
  menuText: {
    color: 'white',
  },
});

export default styles;
