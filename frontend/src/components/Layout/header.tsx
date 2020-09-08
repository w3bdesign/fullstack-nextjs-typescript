import React, { useContext } from 'react';
import Link from 'next/link';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import AppContext from '../../context/AppContext';

const Header = () => {
  // const [user, setUser] = useContext(AppContext);
  const { user, setUser } = useContext(AppContext);

  return (
    <Navbar bg="dark" variant="dark" className="justify-content-lg-around">
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
      <Navbar.Text className="mr-sm-2">
        User:
        {user}
      </Navbar.Text>
    </Navbar>
  );
};

export default Header;
