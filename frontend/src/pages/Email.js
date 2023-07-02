import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './FundRaiseForm.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function Email(){
    const [emailData, setEmailData] = useState({
        "email":"",
        "subject":"",
        "text":""
    })
    const handleChange = (e) => {
        setEmailData({ ...emailData, [e.target.name]: e.target.value })
    }
    const handleSubmit= async (e) =>{
        e.preventDefault()
        try{
            const response = await axios.post("http://localhost:5000/email",emailData)
            if(response.status<400){
                toast.success('Email Sent Successfully', {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }
        }
        catch(err){
            console.error(err);
        }
        
    }
    return (
      
      <Form className="form" onSubmit={handleSubmit}>
        <div><h3 style={{textAlign: "center"}}>FUND FORM</h3></div>
         <Form.Group  className="mb-3" controlId="formBasicEmail" >
              <Form.Label >Email</Form.Label>
              <Form.Control  type="text" placeholder="Enter email" name="email" onChange={handleChange} value={emailData.email} required/>
              <Form.Text className="text-muted">
              </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Enter subject" name="subject" onChange={handleChange} value={emailData.subject} required />
              <Form.Text className="text-muted">
              </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Message</Form.Label>
              <Form.Control type="text" placeholder="Enter Message" name="text" onChange={handleChange} value={emailData.text} required />
              <Form.Text className="text-muted">
              </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">Submit</Button>
          <ToastContainer/>
      </Form>
  );
}
export default Email;