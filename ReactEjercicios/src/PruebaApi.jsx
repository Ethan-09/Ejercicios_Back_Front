import {useEffect, useState} from 'react';
import textos from './data/textos.json';



const PruebaApi = () => {
const [characters,setCharacters]= useState([]);
const [posicion,setPosicion]= useState(0);

  useEffect(()=>{
    fetch('https://narutodb.xyz/api/character')
      .then(res =>res.json())
      .then(res=> {

console.log(res)
        setCharacters(res.characters)
      });

  },[]);


  return (
  <>
  <button onClick={()=>setPosicion(posicion > 0 ? posicion - 1 :0)}>Atrás</button>
          <button onClick={()=>setPosicion(posicion< characters.length -1 ? posicion +1 : posicion)}>Adelante</button>
    {characters.map((character, index) => (
      <p key={index}>
        {index === posicion && '=>'}
        {character.name}<p></p>
        <img src={character.images}></img>
      </p>
    ))}
  </>
);
};

export default PruebaApi;