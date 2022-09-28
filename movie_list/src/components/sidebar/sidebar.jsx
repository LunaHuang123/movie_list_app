import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { LinkContainer } from 'react-router-bootstrap';
import './sidebar.css';
import { PAGE_ROUTE } from '../../constants/page_route';
<<<<<<< HEAD
=======
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';

function Logo() {
  const logoStyle = {
    fontSize: '1.5em',
    padding: '0.1em 0.75em',
    backgroundColor: '#F5C518',
    color: 'black',
    borderRadius: '5px',
    fontFamily: '"Mansalva", sans-serif',
    cursor: 'pointer',
  }
  return (
    <div style={logoStyle}>
      AWESOME
    </div>
  );
}

>>>>>>> 80d9ea37f5819e146c314e7d0baebfb3dd1fc48b

export default function Sidebar() {
  // Container fluid width:100% at all break point
  return (
<<<<<<< HEAD
    <Navbar bg='light' variant='light' expand={'lg'} className='mb-3' fixed='top' collapseOnSelect>
      <Container fluid> 
        <LinkContainer to={`/${PAGE_ROUTE.homePage}`}><Navbar.Brand><h1>Awesome List</h1></Navbar.Brand></LinkContainer>
=======
    <Navbar bg='dark' variant='dark' expand={'lg'} className='mb-3' fixed='top' collapseOnSelect>
      <Container fluid> 
        <LinkContainer to={`/${PAGE_ROUTE.homePage}`}><Navbar.Brand><Logo /></Navbar.Brand></LinkContainer>
>>>>>>> 80d9ea37f5819e146c314e7d0baebfb3dd1fc48b
        <Navbar.Toggle aria-controls = 'offcanvasNavbar-expand' />
        <Navbar.Offcanvas
          id='offcanvasNavbar-expand'
          arial-labelledby='offcanvasNavbarLabel-expand'
          placement='start'
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id='offcanvasNavbarLabel-expand'>
<<<<<<< HEAD
              Awesome List
=======
              <LinkContainer to='/homepage'>
                <Navbar.Brand><Logo /></Navbar.Brand>
              </LinkContainer>
>>>>>>> 80d9ea37f5819e146c314e7d0baebfb3dd1fc48b
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className='justify-content-end flex-grow-1 pe-3'>
              <LinkContainer to={`/${PAGE_ROUTE.homePage}`}>
<<<<<<< HEAD
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
=======
                <Nav.Link>
                  <HomeOutlinedIcon />
                  Home
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to={`/${PAGE_ROUTE.topRatedPage}`}>
                <Nav.Link>
                  <WhatshotOutlinedIcon />
                  Top Rated Movies
                  </Nav.Link>
              </LinkContainer>
              <LinkContainer to={`/${PAGE_ROUTE.likedListPage}`}>
                <Nav.Link>
                  <FavoriteBorderOutlinedIcon/>
                  Liked Movies
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to={`/${PAGE_ROUTE.blockedListPage}`}>
                <Nav.Link>
                  <BlockOutlinedIcon/>
                  Blocked Movies
                </Nav.Link>
>>>>>>> 80d9ea37f5819e146c314e7d0baebfb3dd1fc48b
              </LinkContainer>
            </Nav>
          </Offcanvas.Body>

        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
};