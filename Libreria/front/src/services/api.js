import axios from "axios";

export const instance = axios.create({
  baseURL: 'http://localhost:8080/books'
});

export const saveBook = async (obj) => {console.log(obj); await instance.post('/', obj)}

export const getBooks = async () => await instance.get();

export const deleteBook = async (id) => await instance.delete('/' + id);

export const updateBook = async (id, name, price) => await instance.put('/'+id, { name: name ,  price: price , });  
