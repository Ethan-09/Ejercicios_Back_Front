import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';


const Page2 = () => {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();
  useEffect(()=>{
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('1111111111', data)
          setCharacter(data);
        })
      },[]);
      

  return (
    <div>

      <p>ID: {id}</p> 
      <p>Name: {character?.name}</p> 
      <p>Status: {character?.status}</p>
      <p>Species: {character?.species}</p>
      <p>Gender: {character?.gender}</p>
      <img src={character?.image}/>

    </div>
  );
};

export default Page2;