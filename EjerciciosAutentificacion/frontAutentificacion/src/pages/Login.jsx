import { useState } from "react";
import { login  } from "../services/api2";
import { test } from "../services/api2";
import { useUserContext } from "../providers/UserProvider";


const Login = () => {

const {setUser}=useUserContext();
const [u,setU] =useState();

const handleLogin1 = async () =>{
    const user =await login(u.username, u.password);
    setUser({id:user.token});
}
const handleTest = async () => {
            await test();
    };

  return (
      <div>
        <h2>Log In</h2>
            Username:<input type="text" onChange={(e) => setU({...u, username: e.target.value})}required></input>
        <br />
        
          Password:<input type="password" onChange={(e) => setU({... u, password: e.target.value})}required></input>
          <br/>
          <button onClick={handleLogin1}>Log In</button>
          <button onClick={handleTest}>Test</button>
        </div>
  );
};

export default Login;