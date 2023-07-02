import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
export const Volunteer = () => {
    const [studentData, setStudentData] = useState(null)
    const params = useParams()
    useEffect(()=>{
        const getData = async () => {
            const response = await axios.get(`http://localhost:5000/volunteer/${params.id}`)
            setStudentData(response.data);
        }
        getData()
    })
  return (
    <div style={{padding:"2rem"}}>
        <b>Name:{studentData?.name}</b>
        <h4>Age:{studentData?.age}</h4>
        <h4>Mobile:{studentData?.mobile}</h4>
        <h4>Email:{studentData?.email}</h4>
        <h4>Gender:{studentData?.gender}</h4>
        <h4>Education:{studentData?.education}</h4>
        <h4>Interest:{studentData?.interest}</h4>
        <h4>Occupation:{studentData?.occupation}</h4>
    </div>
  )
}
