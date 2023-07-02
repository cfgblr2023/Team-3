import React from 'react'
import { Button } from 'react-bootstrap'

export const MainCard = () => {
  return (
    <div style={{display:"flex",paddingTop:"",backgroundColor:"#f9f6f3"}}>
        <img style={{width:"600px"}}src="https://lampeducationtrust.com/wp-content/uploads/2022/08/african-american-girl-hands-holding-a-marble-made-heart-1.jpg"></img>
        <div style={{paddingLeft:"2rem"}}>
            <h4 style={{color:"#ffc107",paddingTop:"2rem"}}>BECOME A VOLUNTEER</h4>
            <p style={{fontSize:"1.5rem"}}>
            Volunteers are the backbone of every organization – they not only carry the organization’s ideals within them but also spread the message far and beyond, sensitizing society towards the cause and a mission to support education in the lives of downtrodden children irrespective of their Religion, Caste & Community and to work towards the uplift of those children.
            </p>
            <Button variant="warning" href='/volunteer'>Join now</Button>
        </div>
    </div>
  )
}
