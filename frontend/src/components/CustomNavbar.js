import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Navbar.module.css'
import { Button } from 'react-bootstrap';

function CustomNavbar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/"><img alt="logo" className={styles.navImg} src='https://lampeducationtrust.com/wp-content/uploads/2023/02/cropped-Copy-of-LAMP-1.png'/></Navbar.Brand>
          <Nav className={styles.navdiv}>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/achieve">Achievment</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Button variant="primary" href='/donate'>Donate now</Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavbar;