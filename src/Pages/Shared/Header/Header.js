import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../images/logo/logo2.jpg'
import useFirebase from '../../../hooks/useFirebase';
import './Header.css';
const Header = () => {
    const { user, logOut } = useFirebase();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand className="text-danger" href="#home">MEDICAL</Navbar.Brand>
                    <Navbar.Toggle />
                    <img className="logo" src={logo} alt="" />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="text-light" as={HashLink} to="/home#home">Home</Nav.Link>

                        <Nav.Link className="text-light" as={HashLink} to="/services#services">Services</Nav.Link>

                        <Nav.Link className="text-light" as={HashLink} to="/experts#experts">Experts</Nav.Link>

                        <Nav.Link className="text-light" as={HashLink} to="/blog#blog">Blog</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link className="text-light" as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;