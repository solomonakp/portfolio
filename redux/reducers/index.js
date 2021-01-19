import { combineReducers } from 'redux';

import uiReducer from './uiReducer';
import counterReducer from './counterReducer';

export default combineReducers({
  ui: uiReducer,
  counter: counterReducer,
});
