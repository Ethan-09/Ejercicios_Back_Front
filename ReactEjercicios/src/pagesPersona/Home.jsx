import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>aaaaaaaaa
      <li><Link to="/">Home</Link></li>
      <li><Link to="/people">Consulta</Link></li>
      <li><Link to="/people/new">Alta</Link></li>
      <li><Link to="/people/update">Modificacion</Link></li>
    </div>
  );
};

export default Home;
