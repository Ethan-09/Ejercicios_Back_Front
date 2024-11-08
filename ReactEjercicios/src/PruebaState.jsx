import { useState } from "react"

const App =()=>{

  const [euro,setEuro]= useState();
  const [resultado,setResultado]=useState();
  const handleClick=()=>{
  setResultado(euro)
  }
  const[grados,setGrados]=useState();
  const[rectanguloAlto,setAlto]=useState();
  const[rectanguloLargo,setLargo]=useState();
  const[resultado1,setResultado1]=useState();
  const ANIMAL_IMAGES = {
  img1: "http://via.placeholder.com/111x111",
  img2: "http://via.placeholder.com/222x222",
  img3: "http://via.placeholder.com/333x333",
  };
  const[imagen,setImagen]=useState();

  return(
    <> 
    <h1>Leuros a Dolare</h1>
    <input type="text" placeholder="Euros" onChange={e=> setEuro(e.target.value*2)}></input>
    <button onClick={handleClick}>Calcular</button>
    <p>{resultado} Dorlares</p> 

    <h1>Centigrado a Fahreonangheit</h1>
    <input type="text" placeholder="Centigrados" onChange={e=>setGrados(e.target.value*9/5+32)}></input>
    <p>{grados} Farenhrnthgeithghtgt</p>

    <h1>Clacula Rectangulo</h1>
    <input type="text" placeholder="Alto"onChange={e=>setAlto(e.target.value)}></input>
    <input type="text" placeholder="Largo" onChange={e=>setLargo(e.target.value)}></input>
    <button onClick={()=> setResultado1(rectanguloAlto*rectanguloLargo)}>Calcular</button>
    <p>{resultado1} Es la superficie del rectrangulso</p>
    {/* comentario ... control+ç */}
    <h1>Imagensses de amnimalse</h1>
    <button onClick={()=> setImagen(ANIMAL_IMAGES.img1)}>img1</button>
    <button onClick={()=> setImagen(ANIMAL_IMAGES.img2)}>img2</button>
    <button onClick={()=> setImagen(ANIMAL_IMAGES.img3)}>img3</button>
    <p></p>
    <img src={imagen}></img>

    </>
  )
}
export default App;