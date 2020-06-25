import { createStore, combineReducers } from 'redux'
import noteReducer from './reducers/noteReducer'
import filterReducer from './reducers/filterReducer'
import searchReducer from './reducers/searchReducer.js'

const reducer = combineReducers({
  notes: noteReducer,
  filter1: filterReducer,
  search: searchReducer,
})

const getId = () => (100000 * Math.random()).toFixed(0)

const initialStateNotes = [
  {
    content: 'note from initialState: the app state is in redux store',
    important: true,
    id: getId(),
  },
  {
    content: 'react',
    important: true,
    id: getId(),
  },
  {
    content: 'fx',
    important: false,
    id: getId(),
  },
]

const initialStateFilter = 'ALL'

const initialStates = {
  notes: initialStateNotes,
  filter1: initialStateFilter,
  search: '',
}

const store = createStore(
  reducer,
  initialStates,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
console.log('store index.js', store.getState())

export default store
