import { Link } from 'react-router-dom';

const Home = () => (
        <div>    <h1>Ethan H. Botia</h1>
                <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Estilo">Mapacho?</Link></li>
                        <li><Link to="/ajksdfkjhasdk">Error en la url</Link></li>

                        <li><a href="https://ethanhb.artstation.com/">Portfolio</a></li>
                </ul>
        </div>
)

export default Home;