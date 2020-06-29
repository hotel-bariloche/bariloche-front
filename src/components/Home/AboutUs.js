import React from 'react';
import '../../css/style.css'
import { Row ,Col, Container} from 'reactstrap';
import welcomeBanner1 from '../img/home/welcomeBanner1.png';
import welcomeBanner2 from '../img/home/welcomeBanner2.png';
import welcomeBanner3 from '../img/home/welcomeBanner3.png';
import { Context } from '../../Context/Provider';

const AboutUs = () => {
    const { state } = React.useContext(Context);
    return(
        <div id="about">
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
                            <h2 className="mb-4"><span className="d-block">{state.texts[state.language].home.about.titleHotel}</span> {state.texts[state.language].home.about.titleHotel2}</h2>
                            <p>{state.texts[state.language].home.about.hotel}</p>
                        </div>
                    </Col>
                </Row>
                    </div>
        </section>
        </div>
    )
}

export default AboutUs