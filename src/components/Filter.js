import React from 'react'
import filterChange from '../store/actions/filterActions'
import { useDispatch } from 'react-redux'

const Filter = () => {
  const dispatch = useDispatch()
  return (
    <div>
     filter: all
      <input
        type="radio"
        name="filter"
        onChange={() => dispatch(filterChange('ALL'))}
      />
      important
      <input
        type="radio"
        name="filter"
        onChange={() => dispatch(filterChange('IMPORTANT'))}
      />
      nonimportant
      <input
        type="radio"
        name="filter"
        onChange={() => dispatch(filterChange('NONIMPORTANT'))}
      />
    </div>
  )
}

export default Filter
