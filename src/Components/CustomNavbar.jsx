import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    // NavLink,
    // UncontrolledDropdown,
    // DropdownToggle,
    // DropdownMenu,
    // DropdownItem,
    // NavbarText,
} from 'reactstrap';

function CustomNavbar(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar expand="md" className='px-5 shadow-sm'>
                <NavbarBrand href="/">ElectroSouk</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <Link to="/" className='text-decoration-none pe-auto'>Store</Link>
                        </NavItem>
                    </Nav>
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
                </Collapse>
            </Navbar>
        </div>
    );
}

export default CustomNavbar;