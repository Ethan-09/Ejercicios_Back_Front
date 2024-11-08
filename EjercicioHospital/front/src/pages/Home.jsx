import { Link } from 'react-router-dom';
import foto from '../icon.png';
const Home = () => {
  return (
<div className="form-container" style={{ textAlign: "center" }}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/patients">Consulta</Link></li>
      <li><Link to="/patients/new">Alta</Link></li>
      <li><Link to="/patients/update">Modificacion</Link></li>
      <img src={foto} alt="Icono" width="150" height="200" />
    </div>
  
  );
}

export default Home;
