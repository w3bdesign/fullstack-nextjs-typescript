import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Footer = () => (
  <Navbar bg="secondary" variant="dark">
    <Container className="text-center justify-content-md-center">
      <Navbar.Brand>Footer comes here</Navbar.Brand>
    </Container>
  </Navbar>
);

export default Footer;
