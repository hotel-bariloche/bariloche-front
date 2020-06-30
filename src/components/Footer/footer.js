import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Context } from '../../Context/Provider';
import Image from 'react-bootstrap/Image';
import { FaPhoneVolume, FaRegEnvelope, FaFacebookF, FaTripadvisor, FaInstagram } from "react-icons/fa";





const Footer = () => {
    const { state } = React.useContext(Context);

    return(
        <div>
            <footer className="footer-area section-gap">
                <Container>
                    <Row>
                    <div className="col-xl-8 col-md-8 mb-4 mb-xl-0 single-footer-widget">
                        <div id="logo">
                                <a href="/">< Image style={{height: '200px', width: '200px', color: 'white', position: 'relative', float: 'right'}}src="https://grandhotelbariloche.com/wp-content/uploads/2019/01/LOGO_original-300x300.png" alt="" title="" /></a>
                            </div>
                        </div>
                        <div className="text-lg-right col-xl-2 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
                            <h4>{state.texts[state.language].footer.title}</h4>
                            <ul>
                                <li><a href="#about">{state.texts[state.language].footer.about}</a></li>
                                <li><a href="#video">{state.texts[state.language].footer.video}</a></li>
                                <li><a href="/gallery">{state.texts[state.language].footer.gallery}</a></li>
                                <li><a href="/blog">{state.texts[state.language].footer.location}</a></li>
                            </ul>
                        </div>
                        <div className="col-xl-2 col-sm-6 mb-4 mt-5 mb-xl-0 single-footer-widget">
                            <ul>
                                <li><a href="/blog/#attractions">{state.texts[state.language].footer.attractions}</a></li>
                                <li><a href="#">{state.texts[state.language].footer.room1}</a></li>
                                <li><a href="#">{state.texts[state.language].footer.room2}</a></li>
                                <li><a href="/contacto">{state.texts[state.language].footer.contact}</a></li>
                            </ul>
                        </div>
                       
                    </Row>
                    <div className="footer-bottom row align-items-center text-center text-lg-left">
                        <p className="footer-text m-0 col-lg-8 col-md-12"></p>
                        <div className="col-lg-4 col-md-12 text-center text-lg-right footer-social">
                            <a href="https://www.facebook.com/GrandHotelBariloche/"><i className=""><FaFacebookF /></i></a>
                            <a href="https://www.tripadvisor.es/Hotel_Review-g312848-d1177779-Reviews-Grand_Hotel_Bariloche-San_Carlos_de_Bariloche_Province_of_Rio_Negro_Patagonia.html"><i className=""><FaTripadvisor /></i></a>
                            <a href="https://www.instagram.com/grandhotelbariloche/"><i className=""><FaInstagram/></i></a>
                        </div>
                    </div>
                </Container>
            </footer>
        </div>
    )
}

export default Footer