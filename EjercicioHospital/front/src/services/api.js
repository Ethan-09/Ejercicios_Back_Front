import axios from "axios";

export const instance = axios.create({
  baseURL: 'http://localhost:8080/patients'
});

export const savePatientName = async (obj) => await instance.post('/', obj)

export const getPatients = async () => await instance.get();

export const deletePatient = async (id) => await instance.delete('/' + id);

export const updatePatient = async (id, name, surname,date) => await instance.put('/'+id, { nombre: name ,  apellido: surname , fecha: date});  

