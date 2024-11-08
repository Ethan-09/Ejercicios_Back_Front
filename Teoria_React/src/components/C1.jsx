import { useUserContext } from "../providers/UserProvider";



const C1 = () => {
  const [user,setUser] = useUserContext();

  return (
    <div>
      <input type="text" onChange={e => setUser(e.target.value)}/>
    </div>
  );
};

export default C1;