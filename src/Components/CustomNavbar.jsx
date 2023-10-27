import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,

} from 'reactstrap';
import { getLoggedInUserDetails, isLoggedIn, logout } from './Auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import CartContext from './Context/Cart/CartContext';
import { toast } from 'react-toastify';

function CustomNavbar() {

    const navigate = useNavigate();

    const { resetCart } = useContext(CartContext)

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const handleLogout = () => {
        logout();
        resetCart();
        navigate("/login")
        toast.success("Logout successful")
    }

    const linkStyle = {
        color: 'black'
    }

    return (
        <div>
            <Navbar expand="md" className='px-5 shadow-sm'>
                <NavbarBrand>
                    {/* <Link to="/" state={linkStyle}> */}
                    ElectroSouk
                    {/* </Link> */}
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem style={{ marginRight: "15px" }}>
                            <Link to="/" className='text-decoration-none pe-auto' style={linkStyle}>Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/store/all" className='text-decoration-none pe-auto' style={linkStyle}>Store</Link>
                        </NavItem>
                    </Nav>
                    {!isLoggedIn() &&
                        <>
                            <Nav>
                                <NavItem className='mx-3'>
                                    <Link to="/login" className='text-decoration-none pe-auto' style={linkStyle}>
                                        Login
                                    </Link>
                                </NavItem>
                                <NavItem >
                                    <Link to="/signup" className='text-decoration-none pe-auto' style={linkStyle}>
                                        Signup
                                    </Link>
                                </NavItem>
                            </Nav>
                        </>}
                    {localStorage.getItem("data") && <>
                        <Nav>
                            <NavItem style={{ marginRight: "35px" }}>
                                <Link to="/cart" className='text-decoration-none pe-auto' >
                                    <FontAwesomeIcon icon={faCartShopping} />
                                </Link>
                            </NavItem>
                            <NavItem style={{ marginRight: "25px" }}>
                                <Link to="/dashboard" className='text-decoration-none pe-auto' >
                                    {getLoggedInUserDetails().name}
                                </Link>
                            </NavItem>
                            <NavItem >
                                <Link to="/login" className='text-decoration-none pe-auto' onClick={handleLogout} style={linkStyle}>
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