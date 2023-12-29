import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';


const Create = () => {
    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[age, setAge] = useState("")


    const navigate = useNavigate()

    const handleSubmit = (e) =>{
          e.preventDefault();
          axios.post("https://642343da77e7062b3e2ee702.mockapi.io/form",{
            name,
            email,
            age
          }).then(() =>{
                    navigate("/")

          })
    }
  return (
    <div className='create bg-dark pt-5'>
          <h1 className='p-4 bg-danger text-white d-inline-block d-flex justify-content-center'>
                    <Link to="/"  className='text-decoration-none text-white'>
                    Read Data
                    </Link>
               </h1>
       <Form className='form' onSubmit={handleSubmit}>
       <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your Name" onChange={(e) => setName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter your  email" onChange={(e) => setEmail(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="Enter Age" onChange={(e) => setAge(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" value={"submit"}>
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Create
