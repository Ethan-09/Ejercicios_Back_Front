import { useEffect, useState } from "react";
import {getEquipos, getJugadores} from '../services/api';
import { Link } from 'react-router-dom';
import '../pages/Home.css';

const Home = () => {

  const [equipos, setEquipos] = useState([]);
  useEffect(() => {
    getEquipos().then(setEquipos);
  }, []);
  const [jugadores, setJugadores] = useState([]); 
  const [equipoSeleccionado, setEquipoSeleccionado] = useState('');


return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/page2">Page2</Link></li>
      </ul>
      
      <label htmlFor="equipos">Selecciona un equipo:</label>
      <select
        id="equipos"
        value={equipoSeleccionado}
        onChange={(e) =>  {
const id = e.target.value;
setEquipoSeleccionado(id)
          getJugadores(id).then(data => {
            setJugadores(data)
          })
        }}
      >
        <option value="">-- Selecciona un equipo --</option>
        {equipos.map((equipo) => (
          <option key={equipo.equipoCod} value={equipo.equipoCod}>
            {equipo.nombre}
          </option>
        ))}
      </select>

      {equipoSeleccionado && (
        <div>
          <h3>Jugadores:</h3>
          <div style={{display:'flex'}}>

      <ul>
            {jugadores.map((jugador) => (
              <li key={jugador.id}>{jugador.numeroCamiseta} {jugador.nombre}</li>
            ))}
          </ul>


          <table>
            <tr>
   {jugadores.map((jugador) => (
              <td key={jugador.id} style={{verticalAlign:'bottom'}}>
                <div style={{width:14, background:'green', height:jugador.calidad*30}}>
        
                </div>
              
              </td>
            ))}
            </tr>

            <tr>
              {jugadores.map((jugador)=>(
                <td key={jugador.id}>{jugador.numeroCamiseta}</td>
              ))}
            </tr>
            </table>
            </div>
    
         
        </div>
      )}
    </div>
  );
};

export default Home;
// function Home() {
//   const [equipos, setEquipos] = useState();
//   useEffect(() => {
//     getEquipos().then(setEquipos);
//   }, []);

//   console.log(equipos)
//   return (

//     <div>
//       <li><Link to="/">Home</Link></li>
//       <li><Link to="/">Page2</Link></li>
//       <h1 className="">Equipos</h1>
//       <div className="equipos-grid">
//         {equipos?.map(equipo => (
//           <div key={equipo.id} className="equipo-item">
//             <Link to={"/equipos/" + equipo.id}>
//               <img
//                 src={"http://localhost:8080/imagenes-futbol/" + equipo.fotoEscudo}
//                 alt={equipo.nombre}
//               />
//               <br />
//               {equipo.nombre}
//             </Link>
//             <br />
//             {equipo.presidente}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
  
// }

// export default Home;
