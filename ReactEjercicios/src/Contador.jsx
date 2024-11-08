import{ useState} from 'react'

function App(){

const [v, setV] = useState(10);

const handlePulsar=() => {
  setV(v+1)
  // eslint-disable-next-line no-const-assign
  v=v+1

}

return(
  <>
    <p>{v}</p>
    <button onClick={handlePulsar}>Pulsar</button>
  </>
)



}
export default App