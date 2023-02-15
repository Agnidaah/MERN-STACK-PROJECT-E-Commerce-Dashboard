import React,{useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
const UpdateProduct=()=>{
    const [name,setName]=React.useState('');
    const [price,setPrice]=React.useState('');
    const [category,setCategory]=React.useState('');
    const [company,setCompany]=React.useState('');
    const params=useParams();
    const navigate=useNavigate();
    const updateProduct=async ()=>{
        //console.warn(name,price,category,company);
        let result=await fetch(`http://localhost:5000/product/${params.id}`,{
            method:'put',
            body:JSON.stringify({name,price,category,company}),
            headers:{
                'Content-Type':"application/json"
            }
        });
        result= await result.json();
        console.warn(result);
        navigate('/');
    }   
    useEffect(()=>{
        if(!name && !price && !category && !company ){
        getProductDetails();}
    });
    const getProductDetails=async ()=>{
        let result=await fetch(`http://localhost:5000/product/${params.id}`);
        result=await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    }
    return(
        <div className="product">
            <h1>Update Product</h1>
            <input value={name} onChange={(e)=>{setName(e.target.value)}} className="inputBox" type="text" placeholder="Enter product name"/>
            <input value={price} onChange={(e)=>{setPrice(e.target.value)}} className="inputBox"type="text" placeholder="Enter product price"/>
            <input value={category} onChange={(e)=>{setCategory(e.target.value)}} className="inputBox" type="text" placeholder="Enter product category"/>
            <input value={company} onChange={(e)=>{setCompany(e.target.value)}} className="inputBox" type="text" placeholder="Enter product company"/>
            <button className="appbutton" onClick={updateProduct}>Add to Cart</button>
        </div>)
}
export default UpdateProduct;