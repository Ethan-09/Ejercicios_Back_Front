import { useState, useEffect } from 'react';
import { getPersons, deletePerson } from '../services/apiPersona.js'; 
import {Link} from 'react-router-dom';

const PeopleList = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      const response = await getPersons();
      setPeople(response.data); 
    };
    fetchPeople();
  }, []);

  const handleDelete = async (id) => {
    await deletePerson(id);
    setPeople(people.filter(person => person.id !== id)); 
  };

  return (
    <div>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/people/new">Alta</Link></li>
      <li><Link to="/people/update">Modificacion</Link></li>
      <h1>Lista de Personas/ Consulta</h1>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            {person.nombre} 
            <button onClick={() => handleDelete(person.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleList;