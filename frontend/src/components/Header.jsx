/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return (
        <Navbar variant="light" bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#home">LIN101 IPA</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-dark" />
            <Navbar.Collapse id="navbar-dark">
              <Nav>
                <NavDropdown
                  id="nav-dropdown-dark"
                  title="Exercises"
                  menuVariant="light"
                >
                  <NavDropdown.Item href="#action/3.1">Articulation</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2"> IPA to English </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3"> English to IPA </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default Header