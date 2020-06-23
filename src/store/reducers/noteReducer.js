/* const getId = () => (100000 * Math.random()).toFixed(0)

const initialState = [
  {
    content: 'note from initialState: the app state is in redux store',
    important: true,
    id: getId(),
  },
] */

const getId = () => (100000 * Math.random()).toFixed(0)

const noteReducer = (state = [], { type, payload }) => {
  console.log('state: ', state)
  console.log('payload', payload)
  switch (type) {
    case 'NEW_NOTE':
      const newNote = {
        content: payload,
        important: false,
        id: getId(),
      }
      return [...state, newNote]
    case 'TOGGLE_IMPORTANCE': {
      const id = payload
      const noteToChange = state.find((n) => n.id === id)
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important,
      }
      console.log('toggle noteToChange', noteToChange)
      return state.map((note) => (note.id !== id ? note : changedNote))
    }
    default:
      return state
  }
}

export default noteReducer
