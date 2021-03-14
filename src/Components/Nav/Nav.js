import React from 'react';
import { Form, FormControl, Navbar, Button, Nav } from 'react-bootstrap';
import logo from '../../images/logo/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './nav.css'
const NavBar = () => {
    return (
        <Navbar expand="lg">
            <Navbar.Brand href="#home"><img className="image-fluid w-50" src={logo} alt=""/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Form className="m-auto" inline>
                    <FormControl type="text" placeholder="Search products" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
                <Nav className="ml-auto">
                <Nav.Link className="nav-text" href="#home">Login</Nav.Link>
                <Nav.Link className="nav-text" href="#link"><FontAwesomeIcon icon={faShoppingCart} /></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;