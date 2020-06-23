import React from 'react'
import { useDispatch } from 'react-redux'
import createNote from '../store/actions/noteAction'

const NewNote = (props) => {
  const dispatch = useDispatch()

  const addNote = (event) => {
    event.preventDefault()
    const content = event.target.note1.value
    console.log('addNote e.target.note', content)
    event.target.note1.value = ''
    dispatch(createNote(content))
  }

  return (
    <form onSubmit={addNote}>
      <input name="note1" />
      <button type="submit">add</button>
    </form>
  )
}

export default NewNote
