import axios from 'axios'

const baseUrl = 'https://rickandmortyapi.com/api/character'

const getCharacter = async (page) => {
  const filterPage = page ? `?page=${page}` : ''
  const response = await axios(`${baseUrl}${filterPage}`)
  return response.data
}

export {
  getCharacter
}
