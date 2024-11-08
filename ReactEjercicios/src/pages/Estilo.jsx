import '../style.css';
import myImg from '../Mapacho.jpg';	
import { Link } from 'react-router-dom';

const App = () => {
  
   return (
    <>
    <div><ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Estilo">Mapacho</Link></li>
                        <li><Link to="/ajksdfkjhasdk">Error en la url</Link></li>
                </ul>
                </div>
    
    <div className="box">
      El Mapache
      <div style={{backgroundColor:'green', fontSize:50,fontWeight:'bold',fontFamily:'fantasy'}}>MANOLO</div>
    </div>
    <img src={myImg} />
    </>
  );
};



export default App
