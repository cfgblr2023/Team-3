import React from 'react'
import CustomCard from '../components/CustomCard'
import styles from './Home.module.css'
import { MainCard } from '../components/MainCard'
import { Footer } from '../components/Footer'
export const Home = () => {
  return (
    <>
    <div className={styles.heroSection}>
    <div className={styles.cardSection}>
      <h1 style={{color:"#fff",fontSize:"7rem"}}>DONATE EDUCATION</h1>
      <b style={{color:"#fff",backgroundColor:"#ffc107",fontSize:"1.5rem",width:"900px",textAlign:'center'}}>You can be a helpful hand to change a child’s life forever. When you become a child sponsor, you become a hero to a child living in poverty.</b>
    </div>
    <div style={{marginTop:"7rem",display:"flex",gap:"3rem",alignItems:"center",justifyContent:"center"}}>
    <CustomCard title="Volunteer" content="Our team relies on dedicated volunteers as Mentors to support our mission and make a positive impact in the community." link="/volunteer" button="Explore"/>
        <CustomCard title="Student" content="Our online platform is dedicated to empowering students and job seekers with the skills, resources, and opportunities they need." link="/student" button="Sign Up"/>
    </div>
    </div>
    <div style={{height:"200px",color:"#fff"}}></div>
    <MainCard/>
    <Footer/>
    </>
  )
}
