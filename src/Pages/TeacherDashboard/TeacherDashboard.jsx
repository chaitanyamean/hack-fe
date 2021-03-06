import React, {useState} from 'react';
import { useNavigate } from 'react-router';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {LinkContainer} from 'react-router-bootstrap';
import { Outlet } from 'react-router-dom';
export default function TeacherDashboard() {
    const [expanded, setExpanded] = useState(false);

	const navigate = useNavigate();

    const onSelectHomeWork = (e) => {
        console.log(e)
        if(e.target.value === 'View Homework') {
            navigate('/view-homework')
        } else {
            navigate('/create-homework')
        }
    }

    return (

     
        // <div className= "mr-top-20"  style={{textAlign: 'center'}}>
        //     <h5>
        //     Teacher
        //     </h5>
        //     <Container>
        //     <Select 
        //     options={['Create Homework', 'View Homework']}
        //     title="Select Any One"
        //     onSelectChange={(e)=>onSelectHomeWork(e)}/>
        //     </Container>
        // </div>

        <>
        <Navbar key='md' bg="light" expand='md' className="mb-3" expanded={expanded}>
          <Container fluid>
            <Navbar.Brand>Teacher Dashboard</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} 
            onClick={() => setExpanded(expanded ? false : "expanded")}/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                  Teacher
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <LinkContainer to="create-homework">
                  <Nav.Link 
                  onClick={() => setExpanded(false)}
                  >Create Home work</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="view-homework">
                  <Nav.Link 
                  onClick={() => setExpanded(false)}
                  >View Home work</Nav.Link>
                  </LinkContainer>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        <Outlet />
    </>
    )
}
