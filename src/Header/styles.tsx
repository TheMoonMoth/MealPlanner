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
    height: 'auto',
    backgroundColor: 'blue',
    zIndex: 1,
  },
  rightMenu: {
    position: 'absolute',
    top: 50,
    height: 'auto',
    right: 0,
    backgroundColor: 'blue',
    zIndex: 1,
  },
  navButton: {
    borderBottomColor: 'yellow',
    borderBottomWidth: 1,
    backgroundColor: 'blue',
    height: 80,
    width: 140,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navButtonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'sans-serif',
  }
});

export default styles;
