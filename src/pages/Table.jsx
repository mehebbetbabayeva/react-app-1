import React from 'react';

import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import {useState,useEffect} from "react";
import { BASE_URL } from '../style/utils/constant';



const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: "name",
      headerName: 'Name',
      width: 150,
   
    },
    {
      field: 'surname',
      headerName: 'Surname',
      width: 150,
     
    },
    {
      field: 'username',
      headerName: 'Username',
      width: 110,
     
    },
    {
        field: 'password',
        headerName: 'Password',
        width: 110,
       
      }
  ];

 
 


  
 

 
const Table = () => {
   
  const [userData,setUserData]= useState([])
  
 useEffect(() => {
    axios.get(`${BASE_URL}/get-data`).then((res) => {
      setUserData(res.data.data);
      console.log(res.data)
    });
  }, []);



  

  return (
 
    
      <div className="container">
      <div style={{ height: 400, width: '100%' }}>
    <DataGrid
      
      rows= {userData}
      columns={columns}
      pageSize={5}
      getRowId={(row) =>  row.id }
      rowsPerPageOptions={[5]}
      checkboxSelection
      
    />
  </div>
      </div>
    
  )
}

export default Table