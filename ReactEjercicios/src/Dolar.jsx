import{useRef} from "react"

const App = () => {
  
  const inputRef= useRef();
  const outputRef= useRef();
  const handleClick=()=>{
    outputRef.current.value =inputRef.current.value*2
  }

  return(

      <>
      Escribe un numero para devolverlo de euros a dolares<br>
      </br>
      <input type="text" ref={inputRef}></input>
      <button onClick={handleClick}>Pulsar</button>
      <br>
      </br>
      <output type="text" ref= {outputRef}></output>
      Dolares
      </>
  )
}

export default App
