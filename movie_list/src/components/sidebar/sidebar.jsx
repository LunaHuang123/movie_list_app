import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { LinkContainer } from 'react-router-bootstrap';


export default function Sidebar() {
  // Container fluid width:100% at all break point
  return (
    <Navbar bg='dark' variant='dark' expand={'md'} className='mb-3'>
      <Container fluid> 
        <Navbar.Toggle aria-controls = 'offcanvasNavbar-expand' />
        <Navbar.Brand>MLDB</Navbar.Brand>
        <Navbar.Offcanvas
          id='offcanvasNavbar-expand'
          arial-labelledby='offcanvasNavbarLabel-expand'
          placement='start'
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id='offcanvasNavbarLabel-expand'>
              MLDB
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className='justify-content-end flex-grow-1 pe-3'>
              <LinkContainer to='/homepage'>
                <Nav.Link>Homepage</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/top_rated'>
                <Nav.Link>Top Rated Movies</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/liked_movies'>
                <Nav.Link>Liked Movies</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/blocked_movies'>
                <Nav.Link>Blocked Movies</Nav.Link>
              </LinkContainer>
            </Nav>
          </Offcanvas.Body>

        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
};