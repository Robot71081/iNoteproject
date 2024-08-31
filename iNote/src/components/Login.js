import React from 'react'
import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';

const Login = (props) => {

    const host = "http://localhost:5000";
    const [credentials,setCredentials]= useState({email:"",password:""})
    let navigate=useNavigate ();
    const handleSubmit=async (e)=>{
         e.preventDefault();
         const response = await fetch(`${host}/api/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
             
            },
            body: JSON.stringify({ email:credentials.email,password:credentials.password }),
          });
        const json=await response.json()
        
       if(json.success){
     localStorage.setItem('token',json.authToken);
     navigate("/")
     props.showAlert("Logged in successfully","success")
       }
       else
       {
        props.showAlert("invalid details","danger")
       }
    }

    const onchange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
        }
  return (
    <div>
      <h1>Login To Continue</h1>
      <form  onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onchange} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name="password" onChange={onchange} value={credentials.password}/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Login
