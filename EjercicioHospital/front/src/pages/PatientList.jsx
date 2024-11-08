import { useState, useEffect } from 'react';
import { getPatients, deletePatient } from '../services/api.js'; 
import {Link} from 'react-router-dom';

const PatientsList = () => {
  const [patient, setPatient] = useState([]);

  useEffect(() => {
    const fetchPatient = async () => {
      const response = await getPatients();
      setPatient(response.data); 
    };
    fetchPatient();
  }, []);

  const handleDelete = async (id) => {
    await deletePatient(id);
    setPatient(patient.filter(patient => patient.id !== id)); 
  };

  return (
    <div className="form-container">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/patients/new">Alta</Link></li>
      <li><Link to="/patients/update">Modificacion</Link></li>

    
    <div style={{ textAlign: "center" }}>
      <h1 className='title'>Lista de Pacientes/ Consulta</h1>
      <img src="./src/icon.png" alt="Icono" width="150" height="200" />
    </div>
      <ul>
        {patient.map((patient) => (
          
          <li key={patient.id} className="patient-card">  
            ID:{patient.id}<br></br>
            Nombre:{patient.nombre}<br></br>
            Apellido:{patient.apellido}<br></br>
            Fecha:{new Date(patient.fecha).toLocaleDateString()}<br></br> 
            <button onClick={() => handleDelete(patient.id)}>Eliminar</button>  
            <p></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientsList;