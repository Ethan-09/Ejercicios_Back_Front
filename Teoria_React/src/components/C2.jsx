import { useUserContext } from "../providers/UserProvider";

const C2 = () => {
  const [user] = useUserContext();
  <div>
  <p>{user}</p> 
  </div>

};

export default C2;