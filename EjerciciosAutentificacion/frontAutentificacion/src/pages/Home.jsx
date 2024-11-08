import { useState } from "react";
import { login  } from "../services/api2";
import { test } from "../services/api2";
import { useTokenContext } from "../providers/TokenProvider";


const Home = () => {

// const [username,setUsername]=useState('');
// const [password,setPassword]=useState('');
// const handleLogin = async (event) => {
//         event.preventDefault();
//         try {
//             await login(username, password);
//             alert("Login successful!"); 
//         } catch (error) {
//             console.error("Login failed:", error);
//             alert("Login failed. Please check your username and password.");
//         }
//     };

const {setToken}=useTokenContext;
const [user,setUser] =useState();

const handleLogin1 = async () =>{
    const token =await login(user.username, user.password);
    setToken(token);
}
const handleTest = async () => {
            await test();
    };

  return (
      <div>
        <h2>Log In</h2>
            Username:<input type="text" onChange={(e) => setUser({...user, username: e.target.value})}required></input>
        <br />
        
          Password:<input type="password" onChange={(e) => setUser({... user, password: e.target.value})}required></input>
          <br/>
          <button onClick={handleLogin1}>Log In</button>
          <button onClick={handleTest}>Test</button>
        </div>
  );
};

export default Home;