import { combineReducers } from 'redux';

import uiReducer from './Ui/uiReducer';
import blogReducer from './blog/blogReducer';

interface rootReducerType {}

export default combineReducers({
  ui: uiReducer,
  blog: blogReducer,
});
