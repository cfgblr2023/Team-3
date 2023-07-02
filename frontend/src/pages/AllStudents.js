import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function AllStudents() {
    const [studentData, setStudentData] = useState([])
    useEffect(()=>{
        const getData = async () =>{
            const response = await axios.get('http://localhost:5000/student')
            setStudentData(response.data)
        }
        getData()
    },[])
  return (
    <div style={{padding:"1.5rem"}}>
    <h1>All Students Data</h1>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Education</th>
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
                <td>{stu.education}</td>
                <td>{stu.interest}</td>
                <td><Button href={"/student/"+stu._id}>Read More</Button></td>
              </tr>
            )
        })
        }
      </tbody>
    </Table>
    </div>
  );
}

export default AllStudents;