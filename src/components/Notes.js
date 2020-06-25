import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleImportance } from '../store/actions/noteAction'
import searchNotesAction from '../store/actions/searchAction'

const Note = ({ filtered, onClick }) => {
  return (
    <li>
      {filtered.content}
      <strong>{filtered.important ? 'important' : ''}</strong>
      <button onClick={onClick}>important</button>
    </li>
  )
}

function Notes(props) {
  const dispatch = useDispatch()
  const search = useSelector(({ search }) => search.payload)
  const notes = useSelector(({ notes }) => notes)
  const filter = useSelector(({ filter1 }) => filter1)
  console.log('filter', filter)
  let searchResults = !search
    ? notes
    : notes.filter((n) =>
        n.content.toLowerCase().includes(search.toLowerCase())
      )

  const filteredSearch = () => {
    if (filter === 'ALL' && !search) {
      return notes
    }
    if (filter === 'ALL' && search) {
      return searchResults
    }
    filter === 'IMPORTANT' && !search
      ? notes.filter((note) => note.important)
      : notes.filter((note) => !note.important)
    return filter === 'IMPORTANT'
      ? searchResults.filter((note) => note.important)
      : searchResults.filter((note) => !note.important)
  }
  console.log(
    'searchResults',
    searchResults.filter((note) => note.important)
  )
  console.log(
    'filteredSearch',
    filteredSearch().map((n) => n)
  )
  const handleReset = () => {
    return (searchResults = notes)
  }

  const searchNotes = (e) => {
    e.preventDefault()
    const searchTerm = e.target.searchFor.value
    e.target.searchFor.value = ''
    dispatch(searchNotesAction(searchTerm))
  }

  return (
    <div className="App">
      <form onSubmit={searchNotes}>
        <input name="searchFor" />
        <button type="submit">search</button>
        <button onClick={handleReset}>reset</button>
      </form>
      <hr />
      <ul>
        {filteredSearch().map((n) => (
          <Note
            key={n.id}
            filtered={n}
            onClick={() => dispatch(toggleImportance(n.id))}
          />
        ))}
      </ul>
    </div>
  )
}

export default Notes
