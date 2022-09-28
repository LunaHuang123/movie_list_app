import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { LinkContainer } from 'react-router-bootstrap';
import './sidebar.css';
import { PAGE_ROUTE } from '../../constants/page_route';
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


export default function Sidebar() {
  return (
    <Navbar bg='dark' variant='dark' expand={'lg'} className='mb-3' fixed='top' collapseOnSelect>
      <Container fluid> 
        <LinkContainer to={`/${PAGE_ROUTE.homePage}`}><Navbar.Brand><Logo /></Navbar.Brand></LinkContainer>
        <Navbar.Toggle aria-controls = 'offcanvasNavbar-expand' />
        <Navbar.Offcanvas
          id='offcanvasNavbar-expand'
          arial-labelledby='offcanvasNavbarLabel-expand'
          placement='start'
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id='offcanvasNavbarLabel-expand'>
              <LinkContainer to='/homepage'>
                <Navbar.Brand><Logo /></Navbar.Brand>
              </LinkContainer>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className='justify-content-end flex-grow-1 pe-3'>
              <LinkContainer to={`/${PAGE_ROUTE.homePage}`}>
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
              </LinkContainer>
            </Nav>
          </Offcanvas.Body>

        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
};