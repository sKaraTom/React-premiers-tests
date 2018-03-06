import React from 'react';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

import { Link } from 'react-router-dom';


export default class CustomNavBar extends React.Component {

    render() {
        return(
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Home</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} to="/">
                            Home
                        </NavItem>
                        <NavItem eventKey={2} componentClass={Link} to="/connexion">
                            Connexion
                        </NavItem>
                        <NavItem eventKey={3} componentClass={Link} to="/mouse">
                            Mouse tracker
                        </NavItem>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Action</MenuItem>
                                <MenuItem eventKey={3.2}>Another action</MenuItem>
                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.4}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}