import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Read = () => {
   const[getApidata, setGetApiData] = useState([]);
    function getData(){
        axios.get("https://642343da77e7062b3e2ee702.mockapi.io/form")
        .then((resp) =>{
            setGetApiData(resp.data)
        })
    }

    function setDataToStorage(id,name,email,age){
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("emil", email);
        localStorage.setItem("age", age);
   }
         
       useEffect(()=>{
        getData();
       },[])

     

       function handleDelete(id){
          axios.delete(`https://642343da77e7062b3e2ee702.mockapi.io/form/${id}`)
          .then(()=>{
            getData();
          })
       }
  return (
    <div className='container mt-5 '>
        <div className='row'>
            <div className='col-lg-12 col-md-8 col-sm-4'>
                <h1 className='p-4 bg-danger text-white d-inline-block'>
                    <Link to="/create"  className='text-decoration-none text-white'>
                    Create Data
                    </Link>
               </h1>
            <Table striped bordered hover variant='dark' className='table'>
      <thead>
        <tr>
          <th>ID</th>
          <th> Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
          {
            getApidata.map((item) =>{
                 return(
                    <tr>
                     <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.age}</td>
                    
                    <td>
                     <Link to="/update">
                     <button className='btn btn-primary' onClick={()=>setDataToStorage(item.id, item.name, item.email, item.age)}>Edit</button>
                     </Link>
                    </td>
                    <td>
                      <button className='btn btn-danger' onClick={()=> {if(confirm("Are you sure to delete data")) handleDelete(comdata.id)}}>Delete</button>
                    </td>
                  </tr>
                 )
            })
          }
     
      </tbody>
    </Table>
            </div>
        </div>
      
    </div>
  )
}

export default Read
