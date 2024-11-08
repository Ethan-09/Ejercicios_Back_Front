
import{useRef, useState} from "react"
const App = () =>{
const eurosRef = useRef()
const[dollars,setDollars] =useState(0);

const calculate =() => {
const euros = eurosRef.current.value;
const dollarsAux = euros*2;
setDollars(dollarsAux);
}

const gradosCRef = useRef()
const[grados,setGrados] =useState(0);

const calculate1 =() => {
const gradosC = gradosCRef.current.value;
const gradosF = (gradosC*9/5)+32;
setGrados(gradosF);
}
return(
  <>
  <h1>Dolares en leuros</h1>
    <input type="text" ref={eurosRef}>
    </input>Euros
    <button onClick={calculate}>Calcular</button>
    <p>{dollars}</p>Dolares  
    
  <h1>Centigrados a Farehenhenit</h1>
    <input type="text" ref={gradosCRef}>
    </input>Cebtigrado
    <button onClick={calculate1}>Calcular</button>
    <p>{grados}</p>Ferehrnientig  
  </>
)

}

export default App
