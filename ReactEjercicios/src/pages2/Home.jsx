import { useEffect, useState } from "react";
import { getCharacters } from "../services/api";
import { Link } from 'react-router-dom';

const Home = () => {
  const [characters,setCharacters]= useState();
  useEffect(() =>{
  getCharacters().then(setCharacters);
  },[]);
  return (
    
    <div>
      <li><Link to="/">Home</Link></li>
      <h1>Characters</h1>
      {
      characters?.map(character => <div key={(character.id)}><li><Link to={"/character/"+character.id}>{character.name}</Link></li></div>)
      }
    </div>
  );
};

export default Home;