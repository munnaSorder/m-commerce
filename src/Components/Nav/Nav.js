import React from 'react';
import { Form, FormControl, Navbar, Button, Nav } from 'react-bootstrap';
import logo from '../../images/logo/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './nav.css'
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <Navbar expand="lg">
            <Link className="nav-brand" to="/"><img className="image-fluid w-50" src={logo} alt=""/></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Form className="m-auto" inline>
                    <FormControl type="text" placeholder="Search products" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
                <Nav className="ml-auto">
                <Link className="nav-link nav-text" to="/login">Login</Link>
                <Link className="nav-link nav-text" to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;