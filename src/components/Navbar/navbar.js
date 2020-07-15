import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import './header.scss';
import { FaPhoneVolume, FaRegEnvelope, FaFacebookF, FaTripadvisor, FaInstagram } from "react-icons/fa";
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import spainFlag from './spainFlag.svg';
import englishFlag from './englishFlag.svg';
import { Context } from '../../Context/Provider';




const NavHome = () => {
  const { state, changeLanguage } = React.useContext(Context);
  
  const [navExpanded, setNavExpanded] = React.useState(false);
  window.onscroll = function() {scrollFunction()};

  const scrollFunction= () => {
    let headerEl = document.getElementById("header_area") 
    setNavExpanded(false)
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {      
      headerEl.classList.add("navbar_fixed");
    } else {
      headerEl.classList.remove("navbar_fixed");
    }
  }

  return(

    <Container fluid id="header_area">
      <Row className="top-bar">
        <div className="col-5 contact-bar">
          <p><FaRegEnvelope/> reservas@grandhotelbariloche.com</p>
        </div>
        <div className="col-5 contact-bar">
          <p><FaPhoneVolume/> +54 294 4430622</p>
        </div>
        
        <div className="col-1 countryContact">
            <img title="English" alt="english" onClick={() => changeLanguage('english')} alt="English" src={englishFlag} className={state.language === 'english' ? 'countryFlag borderFlag' : 'countryFlag'} />
            <img title="Español" alt="spanish" onClick={() => changeLanguage('spanish')} alt="Spain" src={spainFlag} className={state.language === 'spanish' ? 'countryFlag borderFlag' : 'countryFlag'} />
        </div>

      </Row>
      <Row className="header-top">
        <Container>
          <div className="d-flex align-items-center">
            <div id="logo">
                <a href="/">< Image style={{height: '140px', width: '150px', backgroundColor: '#cca772', padding: '30px'}}src="https://grandhotelbariloche.com/wp-content/uploads/2019/01/LOGO_original-300x300.png" alt="" title="" /></a>
            </div>
          </div>
        </Container>
      </Row>
      <Container fluid className="main_menu">
          <Row style={{ background: "white", width: "100vw", padding: '0px 52px 0px 52px', marginLeft: '-30px' }}> 
            <Col style={{ border: 'none'}}>
            <Navbar id="navbar" className="navbar navbar_bi" expand="lg"  style={{ boxShadow: 'none'}}            
              onToggle={setNavExpanded}
              expanded={navExpanded}
            >   
           <Navbar.Toggle className="navbar-toggler" aria-controls="basic-navbar-nav">
               <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav" sticky="top">
                <Nav className="mr-auto nav" activeKey="/" as="ul">
                  <Nav.Item as="li">
                    <NavLink exact activeClassName="active" className="nav-link"  onClick={() => setNavExpanded(false)} to="/">{state.texts[state.language].home.navbar.home}</NavLink>
                  </Nav.Item>
                  <Nav.Item as="li">
                  <NavLink exact activeClassName="active" className="nav-link" onClick={() => setNavExpanded(false)} to="/rooms">{state.texts[state.language].home.navbar.rooms}</NavLink>
                  </Nav.Item>
                  <Nav.Item as="li">
                   <a className="nav-link" onClick={() => setNavExpanded(false)} href="https://reservations.travelclick.com/106660?languageid=2%20#/guestsandrooms">{state.texts[state.language].home.navbar.book}</a>
                  </Nav.Item>
                  
                  <Nav.Item as="li">
                   <NavLink exact className="nav-link" onClick={() => setNavExpanded(false)} to="/gallery">{state.texts[state.language].home.navbar.gallery}</NavLink>
                  </Nav.Item>
                  <Nav.Item as="li">
                   <NavLink exact className="nav-link" onClick={() => setNavExpanded(false)} to="/blog">{state.texts[state.language].home.navbar.location}</NavLink>
                  </Nav.Item>
                  
                  <Nav.Item as="li">
                    <NavLink className="nav-link" onClick={() => setNavExpanded(false)} to="/contacto">{state.texts[state.language].home.navbar.contact}</NavLink>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item" >
                    <NavLink className="nav-link" onClick={() => setNavExpanded(false)} to="/games">{state.texts[state.language].home.navbar.games}</NavLink>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
              <div>
                <ul className="social-icons ml-auto">
                    <li><a href="https://www.facebook.com/GrandHotelBariloche/" rel="noopener noreferrer" target="_blank"><FaFacebookF /></a></li>
                    <li><a href="https://www.tripadvisor.es/Hotel_Review-g312848-d1177779-Reviews-Grand_Hotel_Bariloche-San_Carlos_de_Bariloche_Province_of_Rio_Negro_Patagonia.html" rel="noopener noreferrer" target="_blank"><FaTripadvisor /></a></li>
                    <li><a href="https://www.instagram.com/grandhotelbariloche/" rel="noopener noreferrer" target="_blank"><FaInstagram/></a></li>
                  </ul>
              </div>
              <div className="col-1 countryContactResponsive">
                <img onClick={() => changeLanguage('english')} alt="English" src={englishFlag} className={state.language === 'english' ? 'countryFlagRes borderFlagRes' : 'countryFlagRes'} />
                <img onClick={() => changeLanguage('spanish')} alt="Spain" src={spainFlag} className={state.language === 'spanish' ? 'countryFlagRes borderFlagRes' : 'countryFlagRes'} />
              </div>
            </Navbar>
            </Col>
          </Row>
      </Container>
  </Container>  
  )
}

export default NavHome

