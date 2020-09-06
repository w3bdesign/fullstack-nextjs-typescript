import React from 'react';
import Link from 'next/link';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => (
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand>Food order fullstack application</Navbar.Brand>
    <Nav className="justify-content-center" activeKey="/">
      <Link href="/">
        <Nav.Link>Restaurants</Nav.Link>
      </Link>
    </Nav>
  </Navbar>
);

export default Header;
