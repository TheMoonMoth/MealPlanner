import React from 'react';
import { Provider, connect } from "react-redux";
import configureStore from "./src/configureStore";
import Main from './src/Main';

import { fetchRecipes } from './src/actions/dataActions';

import { StyleSheet, Text, View } from 'react-native';
import { NavBar } from './src/Header';
import { RecipeList } from './src/components';
import api from './src/api/';

const store = configureStore();
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
