import React, { useContext, useEffect, useRef, useState } from 'react';
import { Form, FormControl, Navbar, Button, Nav } from 'react-bootstrap';
import logo from '../../images/logo/logo.png'
import './nav.css'
import { Link } from 'react-router-dom';
import { Badge } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { UserContext } from '../../App';
import { signOut } from '../Auth/loginManagement';

const NavBar = () => {
  const [user, setUser] = useContext(UserContext)
  console.log(user);

    // sticky nav function & animation start
    const [navBackground, setNavBackground] = useState(false)
    const navRef = useRef()
    navRef.current = navBackground
    useEffect(() => {
      const handleScroll = () => {
        const show = window.scrollY > 50
        if (navRef.current !== show) {
          setNavBackground(show)
        }
      }
      document.addEventListener('scroll', handleScroll)
      return () => {
        document.removeEventListener('scroll', handleScroll)
      }
    }, [])
    // sticky nav function & animation end


    const logout = () => {
      signOut();
    }
    return (
        <Navbar className="nav-container" sticky="top" expand="lg" style={{ transition: '1s ease',backgroundColor: navBackground ? '#F8F9FA' : 'transparent'}}>
            <Link className="nav-brand" to="/"><img className="image-fluid w-50" src={logo} alt=""/></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Form className="m-auto" inline>
                    <FormControl type="text" placeholder="Search products" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
                <Nav className="ml-auto">
                {
                  user.email ? <Link className="nav-link nav-text mr-2" to="/signIn">
                    {user.displayName}
                  </Link> :
                  <Link className="nav-link nav-text mr-2" to="/signIn">
                    Login
                  </Link>
                }
                <Link onClick={logout} className="nav-link nav-text mr-2">
                    Logout
                  </Link>
                <Link style={{cursor: 'no-drop'}}  className="nav-link nav-text mr-2" to="#">
                    <Badge badgeContent={111} color="secondary">
                      <NotificationsIcon />
                    </Badge>
                </Link>
                <Link style={{cursor: 'no-drop'}} className="nav-link nav-text mr-2" to="#">
                    <Badge badgeContent={111} color="secondary">
                      <ShoppingCartIcon />
                    </Badge>
                </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;