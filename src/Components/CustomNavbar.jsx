import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import { getLoggedInUserDetails, isLoggedIn, logout } from './Auth';

function CustomNavbar(args) {

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const handleLogout = () => {
        logout();
        navigate("/login")
    }

    return (
        <div>
            <Navbar expand="md" className='px-5 shadow-sm'>
                <NavbarBrand to="/">ElectroSouk</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <Link to="/store/all" className='text-decoration-none pe-auto'>Store</Link>
                        </NavItem>
                    </Nav>
                    {!isLoggedIn() &&
                        <>
                            <Nav>
                                <NavItem className='mx-3'>
                                    <Link to="/login" className='text-decoration-none pe-auto'>
                                        Login
                                    </Link>
                                </NavItem>
                                <NavItem >
                                    <Link to="/signup" className='text-decoration-none pe-auto'>
                                        Signup
                                    </Link>
                                </NavItem>
                            </Nav>
                        </>}
                    {localStorage.getItem("data") && <>
                        <Nav>
                            <NavItem className='mx-3'>
                                <Link to="/dashboard" className='text-decoration-none pe-auto'>
                                    {getLoggedInUserDetails().name}
                                </Link>
                            </NavItem>
                            <NavItem className='mx-3'>
                                <Link to="/login" className='text-decoration-none pe-auto' onClick={handleLogout}>
                                    Logout
                                </Link>
                            </NavItem>
                        </Nav>
                    </>}
                </Collapse>
            </Navbar>
        </div>
    );
}

export default CustomNavbar;