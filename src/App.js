import React from 'react'
import Notes from './components/Notes'
import NewNote from './components/NewNote'
import Filter from './components/Filter'
import Search from './components/Search'
import './App.css'

function App(props) {
  return (
    <div className="App">
      <hr />
      <NewNote />
      <Filter />
      <Notes />
    </div>
  )
}

export default App
