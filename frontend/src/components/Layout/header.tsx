import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => (
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Food order fullstack application</Navbar.Brand>
    <Nav>
      <Nav.Link href="/">Restaurants</Nav.Link>
    </Nav>
  </Navbar>
);

export default Header;
