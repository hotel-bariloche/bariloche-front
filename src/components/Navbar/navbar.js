import React, {Link} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, NavItem } from 'reactstrap';
import Button from 'react-bootstrap/Button'
import './header.scss';
import Logo from '../img/Logo.png';
import { FaPhoneVolume, FaRegEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaGooglePlusG, FaRss } from "react-icons/fa";
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
 




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
          </div>
        </div>
      </Container>
    </Row>
    <Container fluid className="main_menu">
        <Row style={{ position: "fixed", background: "white", width: "100vw", padding: '0px 52px 0px 52px' }}> 
          <Col style={{ border: 'none'}}>
          <Navbar className="navbar navbar_bi" expand="lg"  style={{ boxShadow: 'none'}} fixedTop>
            <Navbar.Toggle className="navbar-toggler" aria-controls="basic-navbar-nav">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto nav" activeKey="/" as="ul">
                <Nav.Item as="li" className="nav-item active" >
                  <Nav.Link eventKey="active" className="nav-link" href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" className="nav-item" >
                  <Nav.Link className="nav-link" href="/">About</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" className="nav-item" >
                  <Nav.Link className="nav-link" href="/">Properties</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" className="nav-item" >
                  <Nav.Link className="nav-link" href="/">Gallery</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" className="nav-item" >
                  <Nav.Link className="nav-link" href="/blog">Blog</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" className="nav-item" >
                  <Nav.Link className="nav-link"href="/">Blog</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" className="nav-item" >
                  <Nav.Link className="nav-link" href="/">Contact</Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
            <div>
              <ul className="social-icons ml-auto">
                  <li><a href="#"><FaFacebookF /></a></li>
                  <li><a href="#"><FaTwitter /></a></li>
                  <li><a href="#"><FaLinkedinIn /></a></li>
                  <li><a href="#"><FaGooglePlusG /></a></li>
                  <li><a href="#"><FaRss/></a></li>
                </ul>
            </div>
           
          </Navbar>
          </Col>
        </Row>
    </Container>
  </div>  
  )
}

export default NavHome

