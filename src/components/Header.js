import React from 'react';
import { Navbar, Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';


function Header() {
    return (
        <div >
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#brand">Logo</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>

                    <Nav pullRight>
                        <NavItem eventKey={1} href="/Contacte">
                            Contacte
      </NavItem>
                        <NavItem eventKey={2} href="/Recursos">
                            Recursos
      </NavItem>
                        <NavItem eventKey={3} href="/Presentacio">
                            Presentacio
      </NavItem>
                        <NavDropdown eventKey={4} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={4.1} href="/TallersXerrades">Tallers Xerrades</MenuItem>
                            <MenuItem eventKey={4.2} href="/TerapiaIndividual">Terapia Individual</MenuItem>
                            <MenuItem eventKey={4.3} href="/TerapiaInfantil">Terapia Infantil</MenuItem>
                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>;
        </div>
    );
}

export default Header;

