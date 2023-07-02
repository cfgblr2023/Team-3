import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './VolunteerRegister.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
function VolunteerRegister() {
    const [volunteerData, setVolunteerData] = useState({
        "name": "",
        "mobile":0,
        "email": "",
        "password":"",
        "interest":"",
        "gender":"",
        "age":0,
        "occupation":"",
          })
    const handleChange = (e) => {
        setVolunteerData({ ...volunteerData, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) =>{
        e.preventDefault()
        try{
            const response = await axios.post("http://localhost:5000/volunteer",volunteerData)
            if(response.status<400){
                toast.success('Register Successful', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                setVolunteerData({
                    "name": "",
                    "mobile":0,
                    "email": "",
                    "password":"",
                    "interest":"",
                    "gender":"",
                    "age":0,
                    "occupation":"",
                      })
            }

        }
        catch(err){
            console.error(err)
        }
    }
    return (
      
      <Form className="form" onSubmit={handleSubmit}>
        <div><h3 style={{textAlign: "center"}}>VOLUNTEER REGISTRATION FORM</h3></div>
         <Form.Group  className="mb-3" controlId="formBasicEmail">
              <Form.Label >Name</Form.Label>
              <Form.Control  type="text" placeholder="Enter name" name="name" onChange={(e)=>{
                handleChange(e);
              }}  value={volunteerData.name} required/>
              <Form.Text className="text-muted">
              </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Mobile</Form.Label>
              <Form.Control type="number" placeholder="Enter mobile number" name="mobile" onChange={(e)=>{handleChange(e);}} value={volunteerData.mobile} required/>
              <Form.Text className="text-muted">
              </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" onChange={(e)=>{handleChange(e);}} value={volunteerData.email} required/>
              <Form.Text className="text-muted">
              </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password"  onChange={(e)=>{handleChange(e);}} value={volunteerData.password} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Occupation</Form.Label>
              <Form.Control type="text" placeholder="Occupation" name="occupation"onChange={(e)=>{handleChange(e);}}  value={volunteerData.occupation}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Interests</Form.Label>
              <Form.Control type="text" placeholder="Interests" name="interest" onChange={(e)=>{handleChange(e);}} value={volunteerData.interest}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" placeholder="Age" name="age" onChange={(e)=>{handleChange(e);}} value={volunteerData.age} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Gender</Form.Label>
              <Form.Control type="text" placeholder="Gender" name="gender" onChange={(e)=>{handleChange(e);}} value={volunteerData.gender} />
          </Form.Group>
          <Button variant="primary" type="submit">
              Submit
          </Button>
          <ToastContainer/>
      </Form>
  );
}
export default VolunteerRegister;