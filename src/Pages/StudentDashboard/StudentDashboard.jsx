import React, {useState} from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {LinkContainer} from 'react-router-bootstrap';
import { Outlet } from 'react-router-dom';

function StudentDashboard() {
    const [expanded, setExpanded] = useState(false);

  return (
    <>
        <Navbar key='md' bg="light" expand='md' className="mb-3" expanded={expanded}>
          <Container fluid>
            <Navbar.Brand>Student Dashboard</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} 
            onClick={() => setExpanded(expanded ? false : "expanded")}/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                  Student
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <LinkContainer to="view-homework">
                  <Nav.Link 
                  onClick={() => setExpanded(false)}
                  >Home work</Nav.Link>
                  </LinkContainer>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        <Outlet />
    </>
  );
}

export default StudentDashboard;