import { useEffect, useState } from "react";
import { deleteBook, getBooks } from "../services/api";
import { saveBook } from "../services/api";
import '../pages/Home.css';
import { useNavigate } from "react-router-dom";



function BookGrid() {
  const navigate = useNavigate();
  const [books, setBooks] = useState();
  useEffect(() => {
    const fetchBook = async () => {
      const response = await getBooks();
      setBooks(response.data); 
    };
    fetchBook();
  }, []);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const handleAdd =  async (e) =>  {
    e.preventDefault();
    if (!title || !price) {
      alert('Por favor, completa todos los campos.'); // Alerta si algún campo está vacío
      return;
    }
    else{await saveBook({ title: title ,price: price});
    
    setTitle('');
    setPrice('');
    navigate(0);}
    
  };
  const handleErase =  async (e) =>  {
    await deleteBook({ id: id })
  }

  return (
<table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Price</th>
          <th>Option</th>
        </tr>
      </thead>

            <tfoot>
        <tr>
          <th></th>
          <input 
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              placeholder="Título"
            />
          <th><input 
              type="text" 
              value={price} 
              onChange={(e) => setPrice(e.target.value)} 
              placeholder="Precio"
            /></th>
          <th><button onClick={handleAdd}>Agregar</button></th>
        </tr>
      </tfoot>
      <tbody>
        {books?.map((book) => (
          <tr key={book.id}>
            <td style={{ textAlign: "center" }}>{book.id}</td>
            <td style={{ textAlign: "center" }}>{book.title}</td>
            <td style={{ textAlign: "center" }}>{book.price}</td>
            <td style={{ textAlign: "center" }}><button onClick={handleErase}>Baja</button> <button>Modificar</button></td>
          </tr>
        ))}
      </tbody>
    </table>



  );
};
export default BookGrid;
