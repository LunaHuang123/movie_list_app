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
    <Navbar bg='light' variant='light' expand={'lg'} className='mb-3' fixed='top' collapseOnSelect>
      <Container fluid> 
        <LinkContainer to='/homepage'><Navbar.Brand><h1>Awesome</h1></Navbar.Brand></LinkContainer>
        <Navbar.Toggle aria-controls = 'offcanvasNavbar-expand' />
        <Navbar.Offcanvas
          id='offcanvasNavbar-expand'
          arial-labelledby='offcanvasNavbarLabel-expand'
          placement='start'
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id='offcanvasNavbarLabel-expand'>
              <LinkContainer to='/homepage'>
                <Navbar.Brand><div>Awesome</div></Navbar.Brand>
              </LinkContainer>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className='justify-content-end flex-grow-1 pe-3'>
              <LinkContainer to='/homepage'>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/top_rated'>
                <Nav.Link>Top Rated Moives</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/liked_movies'>
                <Nav.Link>Liked</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/blocked_movies'>
                <Nav.Link>Blocked</Nav.Link>
              </LinkContainer>
            </Nav>
          </Offcanvas.Body>

        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
};