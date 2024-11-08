// import TextoA from './components/A.jsx'
// import TextoB from './components/B.jsx';
// import TextoC from './components/C.jsx';
import Book from './components/Book';
import books from './data/books.json';
import Character from './Character';
import data from './data/data.json';
const App = () =>{
  // <> 
  //  <TextoA/>
  //  <TextoB/>
  //  <TextoC/>
  // </>

  console.log(data)
  return (
    <>  
    <h1>Titulo del libro:</h1>
    <p>Autor:</p>
        {books.map( b=> <Book key={b.id} book={b} />)}
    <h1>Nombres:</h1>
    {data.results.map(d=> <Character key={d.id} character={d}/>)}
    </>
  )
}
export default App;