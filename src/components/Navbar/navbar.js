import React, {Link, Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import './header.scss';
import Logo from '../img/Logo.png';
import { FaPhoneVolume, FaRegEnvelope } from "react-icons/fa";

/*var window_width = $(window).width(),
window_height = window.innerHeight,
header_height = $('.default-header').height(),
header_height_static = $('.site-header.static').outerHeight(),
fitscreen = window_height - header_height;

$('.fullscreen').css('height', window_height);
$('.fitscreen').css('height', fitscreen);
var nav_offset_top = $('header').height() + 50;
function navbarFixed() {
if ($('.header_area').length) {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= nav_offset_top) {
      $('.header_area').addClass('navbar_fixed');
    } else {
      $('.header_area').removeClass('navbar_fixed');
    }
  });
}
}*/

const NavHome = () => {

  return(
  <div>
    <div className="header_area">
        <Row className="header-top">
          <div className="container">
            <div className="d-flex align-items-center">
              <div className="logo">
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
          </div>
        </Row>


        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">

              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                <ul className="nav navbar-nav menu_nav">
                  <li className="nav-item active"><a className="nav-link" href="index.html">Home</a></li>
                  <li className="nav-item"><a className="nav-link" href="about.html">Conócenos</a></li>
                  <li className="nav-item"><a className="nav-link" href="properties.html">Habitaciones</a></li>
                  <li className="nav-item"><a className="nav-link" href="gallery.html">Galería</a></li>
                  <li className="nav-item submenu dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                    aria-expanded="false">Blog</a>
                    <ul className="dropdown-menu">
                      <li className="nav-item"><a className="nav-link" href="blog.html">Blog</a></li>
                      <li className="nav-item"><a className="nav-link" href="blog-single.html">Blog Details</a></li>
                    </ul>
                  </li>
                  <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                </ul>
              </div>

              <ul className="social-icons ml-auto">
                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                <li><a href="#"><i className="fas fa-rss"></i></a></li>
              </ul>
            </div>
          </nav>
        </div>
     </div>

    </div>
  )
}

export default NavHome
