import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './VolunteerRegister.css';

function VolunteerRegister() {
    const [studentData, setStudentData] = useState({
        "name": "",
        "mobile":"",
        "email": "",
        "password":"",
        "passwordConfirm":"",
        "passwordChangedAt":""
          })
    const handleChange = (e) => {
        setStudentData({ ...studentData, [e.target.name]: e.target.value })
    }
    return (
      
      <Form className="form">
        <div><h3 style={{textAlign: "center"}}>VOLUNTEER REGISTRATION FORM</h3></div>
         <Form.Group  className="mb-3" controlId="formBasicEmail">
              <Form.Label >Name</Form.Label>
              <Form.Control  type="text" placeholder="Enter name" name="name" onChange={handleChange}  required/>
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
              <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange}  required/>
              <Form.Text className="text-muted">
              </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password"  required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Occupation</Form.Label>
              <Form.Control type="text" placeholder="Occupation" name="occupation" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Interests</Form.Label>
              <Form.Control type="text" placeholder="Interests" name="interests" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Age</Form.Label>
              <Form.Control type="range" placeholder="Age" name="age" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Gender</Form.Label>
              <Form.Control type="text" placeholder="Gender" name="interes" />
          </Form.Group>
          <Button variant="primary" type="submit">
              Submit
          </Button>
      </Form>
  );
}
export default VolunteerRegister;