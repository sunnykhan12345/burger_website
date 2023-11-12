import React,{useState} from 'react'
import '../../styles/HeaderStyle.css'
import {Container,Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/assets/logo/logo.png';
const Header = () => {  
     const[nav, setNav] = useState(false);

     const ScrollTopValu = () => {
     const srcollTop =  document.documentElement.scrollTop;
          srcollTop > 100 ? setNav(true) : setNav(false)
     };
     window.addEventListener("scroll", ScrollTopValu)
  
  return (
   <header>
       <Navbar collapseOnSelect expand="lg" className={`${nav === true ? "sticky" : ""}`}>
      <Container>
        <Navbar.Brand href="#home">
          <Link to='/' className='logo'>
            <img src={logo} alt='logo' className='img-fluid' />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to='/' className='nav-links'>
              Home
              </Nav.Link>
              <Nav.Link as={Link} to='/about'>
              About
              </Nav.Link>
              <Nav.Link as={Link} to='/menu'>
              Our Menu
              </Nav.Link>
              <Nav.Link as={Link} to='/shop'>
              Shop
              </Nav.Link>
              <Nav.Link as={Link} to='/blog'>
              Blog
              </Nav.Link>
              <Nav.Link as={Link} to='/contact'>
              Contact
              </Nav.Link>
              <Nav.Link as={Link} to='/'>
              <div className='cart fs-5'>
               <i class="bi bi-bag"></i>
               <em className='roundpoint'>2</em>
              </div>
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </header>
  )
}

export default Header
