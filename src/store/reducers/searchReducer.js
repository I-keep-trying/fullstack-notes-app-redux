const searchReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case 'SEARCH_NOTES':
     return {...state, payload}
    default:
      return state
  }
}

export default searchReducer
