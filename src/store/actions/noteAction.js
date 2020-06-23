
const createNote = (payload) => {
  return {
    type: 'NEW_NOTE',
    payload,
  }
}

export const toggleImportance = (payload) => {
  return {
    type: 'TOGGLE_IMPORTANCE',
    payload,
  }
}

export default createNote
