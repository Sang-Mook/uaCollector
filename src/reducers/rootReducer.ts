import { combineReducers } from 'redux'
import commonReducer from './commonReducer'
import mainReducer from './mainReducer'

const rootReducer = combineReducers({
  common: commonReducer,
  main: mainReducer
})

export type ReducerState = ReturnType<typeof rootReducer>

export default rootReducer
