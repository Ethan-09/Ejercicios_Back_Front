const MyComponent = ({ numero1, numero2, setNumero1, setNumero2, Calcular , numero3, numero4, setNumero3, setNumero4, setResultado2}) => (
  <div>
    <h1>Calculadora</h1>

    <button onClick={() => { setNumero1(numero1 - 1); }}>-</button>
    <input type="text" value={numero1} readOnly />
    <button onClick={() => { setNumero1(numero1 + 1); }}>+</button>
    
    <button onClick={() => { setNumero2(numero2 - 1); }}>-</button>
    <input type="text" value={numero2} readOnly />
    <button onClick={() => { setNumero2(numero2 + 1); }}>+</button>

    <button onClick={Calcular}>Calcular</button>
    <p></p>

    Alto<input type="text" value={numero3} onChange={(e)=>setNumero3(e.target.value)}></input>
    Ancho<input type="text" value={numero4} onChange={(e)=>setNumero4(e.target.value)}></input>
    <button onClick={() => { setResultado2(numero3*numero4); }}>Calcular</button>
  </div>
);

export default MyComponent;