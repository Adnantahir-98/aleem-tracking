import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FaAngleRight } from "react-icons/fa6";

import { Link } from 'react-router-dom'

const NavbarComponent = () => {

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>
                    <Link to="/" className='nv-link'>
                        <img src="./orange.png" style={{ width: "50px" }} alt='Main Nav Logo' className='me-2 img-fluid' />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/create-shippment" className='m-2 nv-link'>Shipping</Link>
                        <Link to="/tacking" className='m-2 nv-link'>Tracking</Link>
                        <Link to="/services" className='m-2 nv-link'>Product & Services</Link>
                    </Nav>
                    <Nav className='ms-auto'>
                        <Link to="/login" className='m-2 btn btn-danger rounded-pill px-4'>
                            Login
                            <FaAngleRight />
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
