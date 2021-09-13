import { combineReducers } from 'redux'
import uiReducer from './ui/uiReducer'
import blogReducer from './blog/blogReducer'

const rootReducer = combineReducers({
  ui: uiReducer,
  blog: blogReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
