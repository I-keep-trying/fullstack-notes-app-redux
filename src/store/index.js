import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import noteReducer from './reducers/noteReducer'
import filterReducer from './reducers/filterReducer'
import searchReducer from './reducers/searchReducer.js'


const reducer = combineReducers({
  notes: noteReducer,
  filter1: filterReducer,
  search: searchReducer,
})

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)

console.log('store index.js', store.getState())

export default store
