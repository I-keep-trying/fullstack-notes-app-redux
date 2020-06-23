import React from 'react'
import Notes from './components/Notes'
import NewNote from './components/NewNote'
import Filter from './components/Filter'
import './App.css'

function App(props) {
  return (
    <div className="App">
      <NewNote />
      <Filter />
      <Notes />
    </div>
  )
}

export default App
