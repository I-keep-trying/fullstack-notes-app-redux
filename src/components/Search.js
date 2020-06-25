/* import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import searchNotesAction from '../store/actions/searchAction'
//see me now?

const Search = () => {
  const dispatch = useDispatch()
  const searchState = useSelector((state) => state.search)
  console.log(
    'Search state: ',
    useSelector((state) => state)
  )
  const notes = useSelector((state) => state.notes)

  const searchNotes = (e) => {
    e.preventDefault()
    const searchTerm = e.target.searchFor.value
    const searchNotes = notes.filter((n) => {
      return n.content.toLowerCase().includes(searchNotes.toLowerCase())
    })
    e.target.searchFor.value = ''
    dispatch(searchNotesAction(searchTerm))
  }

  return (
    <form onSubmit={searchNotes}>
      <input name="searchFor" />
      <button type="submit">search</button>
    </form>
  )
}

export default Search */
