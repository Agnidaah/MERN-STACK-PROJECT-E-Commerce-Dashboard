import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
const Login=()=>{
    const [email,setEmail]=React.useState('');
    const [password,setPassword]=React.useState('');
    const navigate=useNavigate();
    useEffect(()=>{
        const auth=localStorage.getItem("user");
        if(auth){
            navigate('/');
        }
    })
    const handleLogin=async ()=>{
        let result=await fetch("http://localhost:5000/login",{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result=await result.json();
        //console.warn(result.name);
        if(result.name){
            localStorage.setItem("user",JSON.stringify(result));
            navigate("/");
        }else{
            alert("please enter correct details");
        }
    }
    return(
        <div className="login">
            <input type="email" className="inputBox" value={email} placeholder="Enter Email"
            onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" className="inputBox" value={password}placeholder="Enter Password"
            onChange={(e)=>setPassword(e.target.value)}/>
            <button className="appbutton" type="button" onClick={handleLogin}>Login</button>
        </div>
    )
}
export default Login;