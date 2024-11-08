import axios from "axios";

export const i = axios.create({
  baseURL: 'http://localhost:8080/'
});


export const getJugadores = async (id) => {
  const data = await i.get('/jugadores/'+id);
  return data.data;
}
export const getEquipos = async () => {
  const response = await i.get('/equipos');
  return response.data;
}
