import React from 'react';
import '../css/style.css'
import { Row ,Col, Container} from 'reactstrap';
import welcomeBanner1 from './img/home/welcomeBanner1.png';
import welcomeBanner2 from './img/home/welcomeBanner2.png';
import welcomeBanner3 from './img/home/welcomeBanner3.png';

const AboutUs = () => {
    return(
        <div>
          <section className="welcome">
            <div className="container">
                <Row className="row align-items-center">
                    <Col  lg="5" className="col-lg-5 mb-4 mb-lg-0">
                        <Row className="row no-gutters welcome-images">
                            <Col sm="7" className="col-sm-7">
                                <div className="card">
                                    <img className="" src={welcomeBanner1} alt="Card image cap"/>
                                </div>
                            </Col>
                            <Col sm="5" className="col-sm-5">
                                <div className="card">
                                    <img className="" src={welcomeBanner2} alt="Card image cap"/>
                                </div>
                            </Col>
                            <Col lg="12" className="col-lg-12">
                                <div className="card">
                                    <img className="" src={welcomeBanner3} alt="Card image cap"/>
                                </div>
                            </Col>
                        </Row>
                    </Col>    
                        <Col lg="7" className="col-lg-7">
                            <div className="welcome-content">
                                <h2 className="mb-4"><span className="d-block">Welcome</span> to our residence</h2>
                                <p>Beginning blessed second a creepeth. Darkness wherein fish years good air whose after seed appear midst evenin, appear void give third bearing divide one so blessed moved firmament gathered </p>
                                <p>Beginning blessed second a creepeth. Darkness wherein fish years good air whose after seed appear midst evenin, appear void give third bearing divide one so blessed</p>
                                <a className="button button--active home-banner-btn mt-4" href="#">Learn More</a>
                            </div>
                        </Col>
                    
                </Row>
                    </div>
        </section>
        </div>
    )
}

export default AboutUs