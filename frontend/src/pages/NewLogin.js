import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './StudentRegister.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export const Login = () => {
    const navigate = useNavigate()
    const [loginData,setLoginData] = useState({
        "email":"",
        "password":""
    })
    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) =>{
        e.preventDefault()
        try{
            const response = await axios.post("http://localhost:5000/volunteer/login/",loginData)
            window.localStorage.setItem("role", response.data.role);
            window.localStorage.setItem("id", response.data._id);
                toast.success('Login Successful', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                navigate('/schedule')
        }
        catch(err){
            toast.error('Incorrect Credentials', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
    }
  return (
    <div>
        <Form onSubmit={handleSubmit} style={{width:"250px",marginLeft:"35rem",marginTop:"3rem"}}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" name="email" onChange={(e)=>{handleChange(e);}} value={loginData.email} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" onChange={(e)=>{handleChange(e);}} value={loginData.password} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
          <ToastContainer/>
        </Form>
    </div>
  )
}
