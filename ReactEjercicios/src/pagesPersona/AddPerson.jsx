import { useState } from 'react';
import { savePersonName } from '../services/apiPersona.js'; 
import {Link} from 'react-router-dom';

const AddPerson = () => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await savePersonName({ nombre: name });
    setName(''); 
  };

  return (
    <div>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/people">Consulta</Link></li>
      <li><Link to="/people/update">Modificacion</Link></li>
      <h1>Agregar Persona</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre de la persona"
        />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default AddPerson;