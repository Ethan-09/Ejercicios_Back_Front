import {useRef} from 'react';

const App = () => {
  
  const inputRef= useRef();
  const outputRef= useRef();
  const handleClick=()=>{
    outputRef.current.value =inputRef.current.value*9/5+32
  }

  return(

      <>
      Escribe un numero para cambiarlo de grados Centigrados a Fahrenheit<br>
      </br>
      <input type="text" ref={inputRef}></input>
      <button onClick={handleClick}>Pulsar</button>
      <br>
      </br>
      <output type="text" ref= {outputRef}></output>
    
      </>
  )
}

export default App
