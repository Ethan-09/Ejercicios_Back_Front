import axios from "axios";

export const i = axios.create({
  baseURL: 'https://rickandmortyapi.com/api'
});


export const getCharacters = async () => {
  const data = await i.get('/character');
  return data.data.results;
}
