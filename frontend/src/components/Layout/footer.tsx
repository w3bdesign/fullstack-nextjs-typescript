import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Footer = () => (
  <Navbar bg="dark" variant="dark">
    <Container className="text-center justify-content-md-center">
      <Navbar.Brand>Copyright (c) 2020</Navbar.Brand>
    </Container>
  </Navbar>
);

export default Footer;
