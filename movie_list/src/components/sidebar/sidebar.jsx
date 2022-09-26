import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { LinkContainer } from 'react-router-bootstrap';
import './sidebar.css';


export default function Sidebar() {
  // Container fluid width:100% at all break point
  return (
    <Navbar bg='light' variant='light' expand={'lg'} className='mb-3' fixed='top'>
      <Container fluid> 
        <LinkContainer to='/homepage'><Navbar.Brand>Awesome List</Navbar.Brand></LinkContainer>
        <Navbar.Toggle aria-controls = 'offcanvasNavbar-expand' />
        <Navbar.Offcanvas
          id='offcanvasNavbar-expand'
          arial-labelledby='offcanvasNavbarLabel-expand'
          placement='start'
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id='offcanvasNavbarLabel-expand'>
              Awesome List
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