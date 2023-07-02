import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function AllVolunters() {
    const [studentData, setStudentData] = useState([])
    useEffect(()=>{
        const getData = async () =>{
            const response = await axios.get('http://localhost:5000/volunteer')
            setStudentData(response.data)
        }
        getData()
    },[])
  return (
    <div style={{padding:"1.5rem"}}>
    <h1>All Volunteer Data</h1>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Occupation</th>
          <th>Interest</th>
        </tr>
      </thead>
      <tbody>
        {studentData.map((stu,key)=>{
            return (
                <tr key={key}>
                <td>{stu.name}</td>
                <td>{stu.age}</td>
                <td>{stu.gender}</td>
                <td>{stu.occupation}</td>
                <td>{stu.interest}</td>
                <td><Button href={"/volunteer/"+stu._id}>Read More</Button></td>
              </tr>
            )
        })
        }
      </tbody>
    </Table>
    </div>
  );
}

export default AllVolunters;