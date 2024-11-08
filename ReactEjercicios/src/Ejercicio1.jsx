import { useState } from "react";

const App = () =>{
const [v,setV]=useState(0);
  return  (

  <div> 
    <button onClick= {()=>setV(v +1)}>Pulsar</button>
    { v 
      % 2 ===0 ? <div>Hola</div>
      : <div>Adios</div>
    
    }
  </div>
)};
export default App;