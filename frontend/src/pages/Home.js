import React from 'react'
import CustomCard from '../components/CustomCard'
import styles from './Home.module.css'
export const Home = () => {
  return (
    <div className={styles.heroSection}>
    <div className={styles.cardSection}>
        <CustomCard title="Volunteer" content="Our team relies on dedicated volunteers as Mentors to support our mission and make a positive impact in the community." link="/volunter" button="Explore"/>
        <CustomCard title="Student" content="Our online platform is dedicated to empowering students and job seekers with the skills, resources, and opportunities they need." link="/student" button="Sign Up"/>
    </div>
    </div>
  )
}
