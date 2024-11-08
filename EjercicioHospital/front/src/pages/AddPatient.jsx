import { useState } from 'react';
import { savePatientName } from '../services/api.js'; 
import {Link, Navigate} from 'react-router-dom';


const AddPatient = () => {

  const [name, setName] = useState('');
  const [surName, setSurname] = useState('');
  const [date,setDate]= useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await savePatientName({ nombre: name ,apellido: surName, fecha: date});
    setName(''); 
    setSurname('');
    setDate('');
    Navigate('http://localhost:5174/')
  }

  return (
    <div className="form-container">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/patients">Consulta</Link></li>
      <li><Link to="/patients/update">Modificacion</Link></li>
      <div style={{ textAlign: "center" }}>
      <h1 className='title'>Agregar Paciente</h1>
      <img src="../src/icon.png" alt="Icono" width="150" height="200" />
    </div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre del paciente"
        />
        <input
          type="text"
          value={surName}
          onChange={(e) => setSurname(e.target.value)}
          placeholder="Apellido del paciente"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Fecha del alta"
        />
        
        <button onClick= {handleSubmit}>Agregar</button>
      
    </div>
  );
};

export default AddPatient;