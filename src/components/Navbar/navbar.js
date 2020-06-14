import React, {Link} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, NavItem } from 'reactstrap';
import Button from 'react-bootstrap/Button'
import './header.scss';
import Logo from '../img/Logo.png';
import { FaPhoneVolume, FaRegEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaGooglePlusG, FaRss } from "react-icons/fa";
import { Navbar } from 'react-bootstrap';
import { Nav, NavDropdown } from 'react-bootstrap';
 



const NavHome = () => {

  return(

    <div className="header_area">
    <Row className="header-top">
      <Container>
        <div className="d-flex align-items-center">
          <div id="logo">
              <a href="index.html"><img src={Logo} alt="" title="" /></a>
          </div>
          <div className="ml-auto d-none d-md-block d-md-flex">
            <div className="media header-top-info">
              <span className="header-top-info__icon">
                <FaPhoneVolume/>
              </span>
              <div className="media-body">
                <p>Have any question?</p>
                <p>Free: <a href="tel:+12 365 5233">+12 365 5233</a></p>
              </div>
            </div>
            <div className="media header-top-info">
              <span className="header-top-info__icon">
                  <FaRegEnvelope/>
              </span>
              <div className="media-body">
                <p>Have any question?</p>
                <p>Free: <a href="tel:+12 365 5233">+12 365 5233</a></p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Row>
    <div className="main_menu">
    <Container fluid>
        <Row> 
          <Col md={8}>
          <Navbar className="navbar" expand="lg">
            <Navbar.Toggle className="navbar-toggler" aria-controls="basic-navbar-nav">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto nav">
                <Nav.Link className="nav-item active" href="/">Home</Nav.Link>
                <Nav.Link className="nav-item">About</Nav.Link>
                <Nav.Link className="nav-item">Properties</Nav.Link>
                <Nav.Link className="nav-item">Gallery</Nav.Link>
                <Nav.Link className="nav-item">Blog</Nav.Link>
                <Nav.Link className="nav-item">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
           
          </Navbar>
          </Col>
          <Col md={2}> 
            <div>
              <ul className="social-icons ml-auto">
                  <li><a href="#"><FaFacebookF /></a></li>
                  <li><a href="#"><FaTwitter /></a></li>
                  <li><a href="#"><FaLinkedinIn /></a></li>
                  <li><a href="#"><FaGooglePlusG /></a></li>
                  <li><a href="#"><FaRss/></a></li>
                </ul>
            </div>
          </Col>
    </Row>
</Container>
    </div>
  </div>
    

  
    




  )
}

export default NavHome

