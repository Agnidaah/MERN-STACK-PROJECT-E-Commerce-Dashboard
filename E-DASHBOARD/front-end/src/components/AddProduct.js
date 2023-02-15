import React from 'react';
    
const AddProduct=()=>{
    const [name,setName]=React.useState('');
    const [price,setPrice]=React.useState('');
    const [category,setCategory]=React.useState('');
    const [company,setCompany]=React.useState('');
    const [error,setError]=React.useState(false);
    const addProduct=async ()=>{
        //console.warn(name,price,category,company);
       if(!name || !price || !category || !company){
            setError(true);
            return false;
        }
        const userId=JSON.parse(localStorage.getItem("user"))._id;
        let result=await fetch("http://localhost:5000/add-product",{
            method:"post",
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        result =await result.json();
        console.warn(result);
    }   
    return(
        <div className="product">
            <h1>Add Product</h1>
            <input value={name} onChange={(e)=>{setName(e.target.value)}} className="inputBox" type="text" placeholder="Enter product name"/>
            {error && !name && <span className="invalid-input">Enter valid name</span>}
            <input value={price} onChange={(e)=>{setPrice(e.target.value)}} className="inputBox"type="text" placeholder="Enter product price"/>
            {error && !price && <span className="invalid-input">Enter valid price</span>}
            <input value={category} onChange={(e)=>{setCategory(e.target.value)}} className="inputBox" type="text" placeholder="Enter product category"/>
            {error && !category && <span className="invalid-input">Enter valid category</span>}
            <input value={company} onChange={(e)=>{setCompany(e.target.value)}} className="inputBox" type="text" placeholder="Enter product company"/>
            {error && !company && <span className="invalid-input">Enter valid company</span>}
            <button className="appbutton" onClick={addProduct}>Add to Cart</button>
        </div>)
}
export default AddProduct;