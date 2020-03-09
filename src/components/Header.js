import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


function Header() {
    return (
        <div >
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/Presentacio">Presentacio</Nav.Link>
                        <Nav.Link href="/Contacte">Contacte</Nav.Link>
                        <Nav.Link href="/Recursos">Recursos</Nav.Link>
                        <Nav.Link href="/TallersXerrades">Tallers i Xerrades</Nav.Link>
                        <NavDropdown title="Terapies" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/TerapiaInfantil">Terapia Infantil</NavDropdown.Item>
                            <NavDropdown.Item href="/TerapiaIdividual">Terapia Individual</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;

