import { useState } from 'react';
import { updatePerson } from '../services/apiPersona.js'; 
import {Link} from 'react-router-dom';

const UpdatePerson = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updatePerson(id, name);
    setId(''); 
    setName(''); 
  };

  return (
    <div>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/people">Consulta</Link></li>
      <li><Link to="/people/new">Alta</Link></li>
      <h1>Actualizar Persona/Modificacion</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="ID de la persona"
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nuevo nombre"
        />
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
};

export default UpdatePerson;
