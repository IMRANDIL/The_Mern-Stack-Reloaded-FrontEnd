import React, { useContext } from 'react'

import { Navbar, Container, Nav } from 'react-bootstrap';

import { userContext } from '../reactContext';

import { Link, useNavigate } from 'react-router-dom'

import { logout } from '../api/user';

import { toast } from 'react-toastify';








const Header = () => {

    const navigate = useNavigate();


    const { user, setUser } = useContext(userContext)




    const handleLogout = (e) => {

        e.preventDefault();

        logout().then((res) => {
            //success..

            toast.success(res.message);
            setUser(null)
            //redirect now....

            navigate('/login')

        }).catch((err) => console.log(err))


    }



    return (
        <Navbar bg="primary navbar-dark" expand="lg">
            <Container>
                <Navbar.Brand className='me-auto' >

                    <Link to='/' className='navbar-brand'>The_Auth</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {!user &&
                            <><Link to='/login' className='nav-link' >
                                Login
                            </Link>

                                <Link to='/register' className='nav-link'>
                                    Register
                                </Link></>}

                        {user && <span className='nav-link' style={{ cursor: 'pointer' }} onClick={handleLogout}>Logout</span>}



                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header