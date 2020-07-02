import axios from 'axios'

const baseUrl = 'http://localhost:3006/notes1'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = { content, important: false }
  console.log('services - createNew: ', object)
  const response = await axios.post(baseUrl, object)
  return response.data
}

export default { getAll, createNew }
