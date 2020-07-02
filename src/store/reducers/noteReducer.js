const getId = () => (100000 * Math.random()).toFixed(0)

const noteReducer = (state = [], { type, payload }) => {
  console.log('noteReducer payload', payload)
  switch (type) {
    case 'NEW_NOTE':
      const newNote = {
        content: payload.content,
        important: false,
        id: getId(),
      }
      return [...state, newNote]
    case 'INIT_NOTES':
      return payload
    case 'TOGGLE_IMPORTANCE': {
      const id = payload
      const noteToChange = state.find((n) => n.id === id)
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important,
      }
      return state.map((note) => (note.id !== id ? note : changedNote))
    }

    default:
      return state
  }
}

export default noteReducer
