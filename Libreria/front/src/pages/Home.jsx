import '../pages/Home.css';
import BookGrid from "./Books";
import { Link } from "react-router-dom";

function Home() {
  
  return (
      <div >
      <li><Link to="/">Home</Link></li>
      <h1 style={{ textAlign: "center" }} >Librería</h1>
      <BookGrid />
      
      </div>
  );
}

export default Home;
