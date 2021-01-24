import { combineReducers } from 'redux';

import uiReducer from './uiReducer';
import counterReducer from './counterReducer';
import blogReducer from './blogReducer';

export default combineReducers({
  ui: uiReducer,
  counter: counterReducer,
  blog: blogReducer,
});
