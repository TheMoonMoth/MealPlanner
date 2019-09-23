import React from 'react';
import { Provider, connect } from "react-redux";
import configureStore from "./src/configureStore";
import DrawerApp from './src/navigation/drawerNavigator';

const store = configureStore();
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <DrawerApp />
      </Provider>
    );
  }
}

export default App;
