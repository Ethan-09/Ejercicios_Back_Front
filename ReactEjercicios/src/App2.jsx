import { useState } from 'react';
import MyComponent from './components/MyComponent1';
import MyComponent2 from './components/MyComponent2';

const App = () => {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado,setResultado]= useState();
  const [numero3,setNumero3]= useState(0);
  const [numero4,setNumero4]= useState(0);
  const [resultado2,setResultado2]= useState();
  const Calcular = () => {
    setResultado(numero1 * numero2);
  };

  return (
       <div>
      <MyComponent
        numero1={numero1}
        numero2={numero2}
        setNumero1={setNumero1}
        setNumero2={setNumero2}
        Calcular={Calcular}
        numero3={numero3}
        setNumero3={setNumero3}
        numero4={numero4}
        setNumero4={setNumero4}
        setResultado2={setResultado2}
        
      />
      <MyComponent2 resultado={resultado} resultado2={resultado2}  />
    </div>
    // <div>    
    //   <h1>Calculadora</h1>
    //   <button onClick={() => { setNumero1(numero1 - 1); }}>-</button>
    //   <input type="text" value={numero1} readOnly />
    //   <button onClick={() => { setNumero1(numero1 + 1); }}>+</button>
    //   <button onClick={() => { setNumero2(numero2 - 1); }}>-</button>
    //   <input type="text" value={numero2} readOnly />
    //   <button onClick={() => { setNumero2(numero2 + 1); }}>+</button>
    // <button onClick={()=>{setResultado(numero1*numero2);}}>Calcular</button>
    // <p>{resultado}</p>
    //  </div>
  );
};

export default App;