import { useState } from "react";
import { useTokenContext } from "../providers/TokenProvider";

const Login = () => {
  const [user, setUser] = useState();
  const { setToken } = useTokenContext();

  const handleLogin = () => {
    // LLamamos al método login de api.js y le pasamos el usuario y la contraseña
    // Si el login es correcto, guardamos el token en el contexto
    const loginCorrecto = true;

    if (loginCorrecto) {
      // setAuth();
      setToken("asdfjkhasdjkfghjsdkf");
    }
  }
  return (
    <div>
      <input type="text" onChange={e => setUser({ ...user, username: e.target.value })} />

      <input type="password" onChange={e => setUser({ ...user, password: e.target.value })} />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;