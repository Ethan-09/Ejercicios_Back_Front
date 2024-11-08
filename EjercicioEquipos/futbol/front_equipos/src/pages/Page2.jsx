
import { useState } from "react";
import { login  } from "../services/api2";
import { test } from "../services/api2";


const Page2 = () => {

const [username,setUsername]=useState('');
const [password,setPassword]=useState('');

const handleLogin = async (event) => {
        event.preventDefault();
        try {
            await login(username, password);
            alert("Login successful!"); 
        } catch (error) {
            console.error("Login failed:", error);
            alert("Login failed. Please check your username and password.");
        }
    };
const handleTest = async () => {
            await test();
    };

  return (
      <div>
        <h2>Log In</h2>
            Username:<input type="text"value={username} onChange={(e) => setUsername(e.target.value)}
                        required></input>
        <br />
        
          Password:<input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                        required></input>
          <br/>
          <button onClick={handleLogin}>Log In</button>
          <button onClick={handleTest}>Test</button>
        </div>
  );
};

export default Page2;