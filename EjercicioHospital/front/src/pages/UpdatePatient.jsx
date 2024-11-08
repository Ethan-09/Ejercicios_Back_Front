import { useState } from 'react';
import { updatePatient} from '../services/api.js'; 
import {Link} from 'react-router-dom';

const UpdatePatient = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurame] = useState('');
  const [date,setDate]= useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updatePatient(id, name, surname);
    setId(''); 
    setName(''); 
    setSurame('');
    setDate('');
  };

  return (
    <div className="form-container">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/patients">Consulta</Link></li>
      <li><Link to="/patients/new">Alta</Link></li>
      
       <div style={{ textAlign: "center" }}>
      <h1 className='title'>Actualizar Paciente/Modificacion</h1>
      <img src="../src/icon.png" alt="Icono" width="150" height="200" />
    </div>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="ID del paciente"
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nuevo nombre"
        />
        <input
          type="text"
          value={surname}
          onChange={(e) => setSurame(e.target.value)}
          placeholder="Nuevo Apellido"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Nueva Fecha"
        />
        <button onClick={handleSubmit}>Actualizar</button>
    </div>
  );
};

export default UpdatePatient;
