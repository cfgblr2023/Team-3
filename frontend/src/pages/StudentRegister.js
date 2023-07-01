import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function StudentRegister(){
  
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
      
      <Form class="form">
        <div><h2>STUDENT REGISTRATION FORM</h2></div>
         <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" name="name" onChange={handleChange} />
              <Form.Text className="text-muted">
              </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Mobile</Form.Label>
              <Form.Control type="number" placeholder="Enter mobile number" name="number" onChange={handleChange} />
              <Form.Text className="text-muted">
              </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} />
              <Form.Text className="text-muted">
              </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password Confirm</Form.Label>
              <Form.Control type="password" placeholder="Password Confirm" name="password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>PasswordChangedAt</Form.Label>
              <Form.Control type="password" placeholder="Password Changed At" name="password" />
          </Form.Group>
          <Button variant="primary" type="submit">
              Submit
          </Button>
      </Form>
  );
}
export default StudentRegister;