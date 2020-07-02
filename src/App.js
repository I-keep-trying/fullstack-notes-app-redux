import React, { useEffect } from 'react'
import Notes from './components/Notes'
import NewNote from './components/NewNote'
import Filter from './components/Filter'
import noteService from './services/notes'
import { initializeNotes } from './store/actions/noteAction'
import { useDispatch } from 'react-redux'

import './App.css'

function App(props) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeNotes())
  }, [dispatch])

  return (
    <div className="App">
      <h1>Notes App</h1>
      <hr />
      <NewNote />
      <Filter />
      <Notes />
    </div>
  )
}

export default App
