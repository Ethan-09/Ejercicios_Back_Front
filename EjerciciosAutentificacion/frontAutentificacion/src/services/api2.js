
import axios from "axios";

export const i = axios.create({
  baseURL: 'http://localhost:8080/'
});

export const login = async (username, password) => {
    const token = btoa(username + ":" + password);
    const response = await i.post("/login",{},
    {
        headers: {
            "Content-Type": "application/json",
            Authorization: "basic " + token,
        },
    });
    console.log(response.data,'11111111')
    if(response.data.resp === "ok"){
      setAuth(token);
      return {id:response.data.id};
    }
    return null;
}

export const getMessages = async(id)=>{
  const response = await i.get('/'+id)
  
}


export const setAuth = async (token) => {
    i.defaults.headers.common.Authorization = `basic ${token}`;
};

export const test = () => {
	i.get("/users");
}