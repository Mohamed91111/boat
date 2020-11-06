import React from 'react';
import './Nav.css';

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'


export default function Nav({ setLoc }) {
  return (
    <div>
        <Navbar expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand className="navcell" variant="outline-info" onClick={() => setLoc('home')}>Adding</Navbar.Brand>
            <Navbar.Brand className="navcell" variant="outline-info" onClick={() => setLoc('settings')}>Deleting</Navbar.Brand>
          </Container>
        </Navbar>
    </div>
  );
}
