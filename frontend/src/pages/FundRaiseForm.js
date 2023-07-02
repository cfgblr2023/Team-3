import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './FundRaiseForm.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function FundRaiseForm(){
    const navigate = useNavigate()
    const [studentData, setStudentData] = useState({
        "name": "",
        "mobile":0,
        "email": "",
        "amount":0
    })
    const handleChange = (e) => {
        setStudentData({ ...studentData, [e.target.name]: e.target.value })
    }
    const handleSubmit= async (e) =>{
        e.preventDefault()
        try{
            const response = await axios.post("http://localhost:5000/funder",studentData)
            if(response.status<400){
                toast.success('Payment Successfully', {
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
            navigate('/')
        }
        catch(err){
            console.error(err);
        }
        
    }
    return (
      
      <Form className="form" onSubmit={handleSubmit}>
        <div><h3 style={{textAlign: "center"}}>FUND FORM</h3></div>
         <Form.Group  className="mb-3" controlId="formBasicEmail" >
              <Form.Label >Name</Form.Label>
              <Form.Control  type="text" placeholder="Enter name" name="name" onChange={handleChange} value={studentData.name}required/>
              <Form.Text className="text-muted">
              </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Mobile</Form.Label>
              <Form.Control type="number" placeholder="Enter mobile number" name="mobile" onChange={handleChange} value={studentData.mobile} required />
              <Form.Text className="text-muted">
              </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} value={studentData.email} required />
              <Form.Text className="text-muted">
              </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Amount</Form.Label>
              <Form.Control type="number" placeholder="Amount" name="amount" onChange={handleChange} value={studentData.amount}/>
          </Form.Group>
          <Button variant="primary" type="submit">Submit
          </Button>
          <ToastContainer/>
      </Form>
  );
}
export default FundRaiseForm;