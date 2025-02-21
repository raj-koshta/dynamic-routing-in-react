import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
  return (
    <Navbar fixed="bottom" bg="dark" data-bs-theme="dark" style={{zIndex: "9999"}}>
        <Container>
          <Nav className="m-auto">
            <h1 className='text-white'>Footer</h1>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Footer
