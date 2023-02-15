import React,{useState,useEffect} from "react";
import {useNavigate} from 'react-router-dom';
const Signup=()=>{
    const[name,setName]=useState("");
    const [password,setPass]=useState("");
    const [email,setEm]=useState("");
    const navigate=useNavigate();
    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth){
            navigate('/');
        }
    })
    const collectData=async ()=>{
        let result=await fetch('http://localhost:5000/register',{
        method:'post',
        body:JSON.stringify({name,email,password}),
        headers:{
            'Content-Type':'Application/json'
        },
        });
        result=await result.json();
        //console.warn(result);
        localStorage.setItem("user",JSON.stringify(result));
            navigate('/')
    }
    return(
        <div className="register">
            <h1>Register</h1>
            <input className="inputBox" type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Name"/>
            <input className="inputBox" type="email" value={email} onChange={(e)=>{setEm(e.target.value)}} placeholder="Enter Email"/>
            <input className="inputBox" type="password" value={password} onChange={(e)=>{setPass(e.target.value)}} placeholder="Enter Password"/>
            <button className="appbutton" type="button" onClick={collectData}>Sign Up</button>
        </div>)
}
export default Signup;