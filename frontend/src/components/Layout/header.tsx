import React from 'react';
import Link from 'next/link';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => (
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand>Food order fullstack application</Navbar.Brand>
    <Nav className="justify-content-center">
      <Link href="/">
        <Nav.Link href="/">Restaurants</Nav.Link>
      </Link>
      <Link href="/login">
        <Nav.Link href="/login">Login</Nav.Link>
      </Link>
      <Link href="/register">
        <Nav.Link href="/register">Register</Nav.Link>
      </Link>
    </Nav>
    <Nav className="justify-content-center">
      User:
    </Nav>

  </Navbar>
);

export default Header;
