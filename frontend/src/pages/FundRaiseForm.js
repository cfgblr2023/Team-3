import { useState } from 'react';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './FundRaiseForm.css';

function FundRaiseForm(){
  
    const [studentData, setStudentData] = useState({
        "name": "",
        "mobile":"",
        "email": "",
        "amount":"",
        
          })
    const handleChange = (e) => {
        setStudentData({ ...studentData, [e.target.name]: e.target.value })
    }
    return (
      
      <Form className="form">
        <div><h3 style={{textAlign: "center"}}>FUND FORM</h3></div>
         <Form.Group  className="mb-3" controlId="formBasicEmail" >
              <Form.Label >Name</Form.Label>
              <Form.Control  type="text" placeholder="Enter name" name="name" onChange={handleChange} required/>
              <Form.Text className="text-muted">
              </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Mobile</Form.Label>
              <Form.Control type="number" placeholder="Enter mobile number" name="number" onChange={handleChange} required />
              <Form.Text className="text-muted">
              </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} required />
              <Form.Text className="text-muted">
              </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Amount</Form.Label>
              <Form.Control type="number" placeholder="Amount" name="amount" />
          </Form.Group>
          <Button variant="primary" type="submit" ><Link to='/fund'>Submit</Link>
              
          </Button>
      </Form>
  );
}
export default FundRaiseForm;