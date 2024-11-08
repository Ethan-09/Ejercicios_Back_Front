import { useState } from 'react';
import textos from './data/textos.json'

const App = () =>{
  const  [num,setNum]=useState(0);
  return(
    <>    
          <button onClick={()=>setNum(num > 0 ? num - 1 :0)}>Atrás</button>
          <button onClick={()=>setNum(num< textos.length -1 ? num +1 : num)}>Adelante</button>
          

    {
      textos.map((texto, index) =>
        <p key={texto}>{index === num && '-'}
          {texto}
        </p>)
      }
      </>

  );
};
export default App
