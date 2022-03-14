import React from 'react'

import { Navbar, Container, Nav } from 'react-bootstrap'

import { Link } from 'react-router-dom'




const Header = () => {
    return (
        <Navbar bg="primary navbar-dark" expand="lg">
            <Container>
                <Navbar.Brand className='me-auto' >

                    <Link to='/' className='navbar-brand'>The_Auth</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/login' className='nav-link' >
                            Login
                        </Link>

                        <Link to='/register' className='nav-link'>
                            Register
                        </Link>



                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header