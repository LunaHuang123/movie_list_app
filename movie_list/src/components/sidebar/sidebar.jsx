import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { LinkContainer } from 'react-router-bootstrap';
import './sidebar.css';
import { PAGE_ROUTE } from '../../constants/page_route';

export default function Sidebar() {
  // Container fluid width:100% at all break point
  return (
    <Navbar bg='light' variant='light' expand={'lg'} className='mb-3' fixed='top' collapseOnSelect>
      <Container fluid> 
        <LinkContainer to={`/${PAGE_ROUTE.homePage}`}><Navbar.Brand><h1>Awesome List</h1></Navbar.Brand></LinkContainer>
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
              <LinkContainer to={`/${PAGE_ROUTE.homePage}`}>
                <Nav.Link>Homepage</Nav.Link>
              </LinkContainer>
              <LinkContainer to={`/${PAGE_ROUTE.topRatedPage}`}>
                <Nav.Link>Top Rated Movies</Nav.Link>
              </LinkContainer>
              <LinkContainer to={`/${PAGE_ROUTE.likedListPage}`}>
                <Nav.Link>Liked Movies</Nav.Link>
              </LinkContainer>
              <LinkContainer to={`/${PAGE_ROUTE.blockedListPage}`}>
                <Nav.Link>Blocked Movies</Nav.Link>
              </LinkContainer>
            </Nav>
          </Offcanvas.Body>

        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
};