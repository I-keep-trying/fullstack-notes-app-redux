import React from 'react'
//import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import { toggleImportance } from '../store/actions/noteAction'

const Note = ({ note1, onClick }) => {
  return (
    <li>
      {note1.content}
      <strong>{note1.important ? 'important' : ''}</strong>
      <button onClick={onClick}>important</button>
    </li>
  )
}

function Notes(props) {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  const notes = useSelector(({ filter1, notes }) => {
    if (filter1 === 'ALL') {
      return notes
    }
    return filter1 === 'IMPORTANT'
      ? notes.filter((note) => note.important)
      : notes.filter((note) => !note.important)
  })

  return (
    <div className="App">
      <ul>
        {notes.map((n) => (
          <Note
            key={n.id}
            note1={n}
            onClick={() => dispatch(toggleImportance(n.id))}
          />
        ))}
      </ul>
    </div>
  )
}

export default Notes
