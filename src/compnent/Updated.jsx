import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Updated = () => {
  return (
    <div className='create bg-dark pt-5'>
    <h1 className='p-4 bg-danger text-white d-inline-block d-flex justify-content-center'>
              <Link to="/"  className='text-decoration-none text-white'>
              Update Data
              </Link>
         </h1>
 <Form className='form' >
 <Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label> Name</Form.Label>
  <Form.Control type="text" placeholder="Enter your Name" />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Email address</Form.Label>
  <Form.Control type="email" placeholder="Enter your  email"  />
  <Form.Text className="text-muted">
    We'll never share your email with anyone else.
  </Form.Text>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Age</Form.Label>
  <Form.Control type="number" placeholder="Enter Age" />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicCheckbox">
  <Form.Check type="checkbox" label="Check me out" />
</Form.Group>
<Button variant="primary" type="Update" value={"submit"}>
  Submit
</Button>
</Form>
</div>
  )
}

export default Updated
