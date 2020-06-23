import React from 'react'
import filterChange from '../store/actions/filterActions'
import { useDispatch, useSelector } from 'react-redux'

const Filter = () => {
  const dispatch = useDispatch()
  const filter = useSelector((state) => state.filter)
  console.log('filter: ', filter)
  return (
    <div>
      all
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
