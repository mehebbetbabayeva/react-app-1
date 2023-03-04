import axios from 'axios';
import React from 'react';
import {useState,useEffect} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { BASE_URL } from '../style/utils/constant';



const Register = () => {
    const [userData,setUserData]=useState({name:"",surname:"",username:"",password:"" , id:Date.now()})
    const onHandleChange =(e)=>{
        setUserData({...userData,[e.target.name]:e.target.value})
    }
    const onHandleClick =()=>{
        axios.post(`${BASE_URL}/create-data`,userData).then(res=>{
            console.log(res)
         
        })
    }
    const {name,surname,username,password,id}=userData
   
  
  return (
<>
       
        <div className="form">
            <div className="input-content">
            <TextField id="name" label="Name" variant="outlined" onChange={onHandleChange} name="name" />
            <TextField id="surname" label="Surname" variant="outlined" onChange={onHandleChange} name="surname"/>   
            <TextField id="username" label="Username" variant="outlined" onChange={onHandleChange} name="username" />
            <TextField id="password" label="Password" variant="outlined" onChange={onHandleChange} name="password"/>
            <Button variant="contained" disabled={name==="" || surname===""||username===""|| password.length<8 ? true : false}  onClick={onHandleClick}>Register</Button>
            </div>
        </div>

</>  )
}

export default Register