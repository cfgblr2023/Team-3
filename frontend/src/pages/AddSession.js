import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './StudentRegister.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import {useLocal} from '../hooks/useLocal'
function AddSession(){
    const getData = useLocal();
        const [sessionData, setSessionData] = useState({
            "name": "",
            "description":"",
            "date":"",
            "duration":"",
            "tag":"",
            "link":"",
            "volunteerId":getData.id
        })
        const handleChange = (e) => {
            setSessionData({ ...sessionData, [e.target.name]: e.target.value })
        }
        const handleSubmit = async (e) =>{
            e.preventDefault()
            try{
                const response = await axios.post("http://localhost:5000/sessions",sessionData)
                toast.success('Added Successful', {
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
            catch(err){
                toast.error('Unsuccessfully', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
            })
            }
        }          
    return (
      
      <Form className="form" onSubmit={handleSubmit}>
        <div><h3 style={{textAlign: "center"}}>ADD SESSION FORM</h3></div>
         <Form.Group  className="mb-3" controlId="formBasicEmail">
              <Form.Label >Name</Form.Label>
              <Form.Control  type="text" placeholder="Enter name" name="name" onChange={(e)=>{
                handleChange(e);
              }}  value={sessionData.name} required/>
              <Form.Text className="text-muted">
              </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Enter description" name="description" onChange={(e)=>{handleChange(e);}} value={sessionData.description} required/>
              <Form.Text className="text-muted">
              </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Date</Form.Label>
              <Form.Control type="text" placeholder="Enter date" name="date" onChange={(e)=>{handleChange(e);}} value={sessionData.date} required/>
              <Form.Text className="text-muted">
              </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Duration</Form.Label>
              <Form.Control type="text" placeholder="Duration" name="duration"  onChange={(e)=>{handleChange(e);}} value={sessionData.duration} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Tag</Form.Label>
              <Form.Control type="text" placeholder="Tag" name="tag" onChange={(e)=>{handleChange(e);}}  value={sessionData.tag}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Link</Form.Label>
              <Form.Control type="text" placeholder="Link" name="link"onChange={(e)=>{handleChange(e);}}  value={sessionData.link}/>
          </Form.Group>
          <Button variant="primary" type="submit">
              Submit
          </Button>
          <ToastContainer/>
      </Form>
  );
}
export default AddSession;