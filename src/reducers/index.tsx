import { combineReducers } from 'redux';
import { dataReducer as appData } from './dataReducer';

const rootReducer = combineReducers({
  appData,
});

export default rootReducer;
