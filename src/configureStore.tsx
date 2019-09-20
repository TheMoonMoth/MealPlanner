import { createStore } from 'redux';
import app from './reducers/';

const configureStore = () => {
  let store = createStore(app);
  return store;
};

export default configureStore;
