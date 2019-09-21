import React from 'react';
import { Provider, connect } from "react-redux";
import configureStore from "./src/configureStore";
import Main from './src/Main';

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
