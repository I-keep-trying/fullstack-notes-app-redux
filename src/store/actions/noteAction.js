import noteService from '../../services/notes'

const createNote = (payload) => {
  return async (dispatch) => {
    const newNote = await noteService.createNew(payload)
    dispatch({ type: 'NEW_NOTE', payload: newNote })
  }
}

export const toggleImportance = (payload) => {
  return {
    type: 'TOGGLE_IMPORTANCE',
    payload,
  }
}

/* export const initializeNotes = (payload) => {
  return async (dispatch) => {
    payload = await noteService.getAll()
    console.log('async notes', payload)
    dispatch({ type: 'INIT_NOTES', payload })
  }
} */

export const initializeNotes = () => {
  return async (dispatch) => {
    const notes = await noteService.getAll()
    dispatch({
      type: 'INIT_NOTES',
      payload: notes,
    })
  }
}

export default createNote
