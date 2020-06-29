import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Container, Row, Col } from 'reactstrap';
import Card from 'react-bootstrap/Card'
import economyDoble from '../img/hotel/economy-doble.jpg';
import standardDoble from '../img/hotel/standard-doble.jpg';
import bed1 from '../img/home/bed-icon.png';
import { FaWifi, FaRegSnowflake } from 'react-icons/fa';
import { GiWineBottle } from "react-icons/gi";
import './Rooms.css';
import { Context } from '../../Context/Provider';



const Rooms = () => {
    const { state } = React.useContext(Context);
    return(
    <div> 
        <section className="blog-banner-area" id="blog">
            <div className="container h-100">
                <div className="blog-banner">
                    <div className="text-center">
                        <h1>{state.texts[state.language].rooms.banner}</h1>
                    <nav aria-label="breadcrumb" className="banner-breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Habitaciones</li>
                        </ol>
                    </nav>
                    </div>
                </div>
            </div>
        </section>

            <Card>
                    <Row className="room-container">
                        <div className="room-article-container">
                            <div className="room-title">
                                <h2>{state.texts[state.language].rooms.room.economy.title}</h2>
                            </div>
                            <hr/>
                                <p className="room-description">{state.texts[state.language].rooms.room.economy.description}</p>
                                <div>
                                   <ul className="services-room">
                                       <li><p><FaWifi/>Free Wifi</p></li>
                                       <li><p><FaRegSnowflake/>Aire acondicionado</p></li>
                                       <li><p><GiWineBottle/>Minibar</p></li>
                                    </ul> 
                                </div>
                        </div>
                    </Row>
                <hr/>
                    <Card.Body>
                    <Row pb={3} mt={4}>   
                        <Col md={6} xl={4} mb={5}>
                            <Card className="card card-explore" style={{ marginTop: '40px'}}>
                                <div className="card-explore__img">
                                    <Card.Img className="card-img" src={economyDoble} alt=""/>
                                </div>
                                <Card.Body className="card-body">
                                    <h3 className="card-explore__title"><a href="#">{state.texts[state.language].rooms.room.doble.economy}</a></h3>
                                    <p>{state.texts[state.language].rooms.room.doble.description}</p>
                                    <a className="card-explore__link" target="_blank" href="https://reservations.travelclick.com/106660?languageid=2%20#/guestsandrooms">{state.texts[state.language].home.book} <i className="ti-arrow-right"></i></a>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} xl={4} mb={5}>
                            <Card className="card card-explore" style={{ marginTop: '40px'}}>
                                <div className="card-explore__img">
                                    <Card.Img className="card-img" src="" alt=""/>
                                </div>
                                <Card.Body className="card-body">
                                    <h3 className="card-explore__title"><a href="#">{state.texts[state.language].rooms.room.triple.economy}</a></h3>
                                    <p>{state.texts[state.language].rooms.room.triple.description}</p>
                                    <a className="card-explore__link" target="_blank" href="https://reservations.travelclick.com/106660?languageid=2%20#/guestsandrooms">{state.texts[state.language].home.book} <i className="ti-arrow-right"></i></a>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} xl={4} mb={5}>
                            <Card className="card card-explore" style={{ marginTop: '40px'}}>
                                <div className="card-explore__img">
                                    <Card.Img className="card-img" src="" alt=""/>
                                </div>
                                <Card.Body className="card-body">
                                    <h3 className="card-explore__title"><a href="#">{state.texts[state.language].rooms.room.cuadruple.economy}</a></h3>
                                    <p>{state.texts[state.language].rooms.room.cuadruple.description}</p>
                                    <a className="card-explore__link" target="_blank" href="https://reservations.travelclick.com/106660?languageid=2%20#/guestsandrooms">{state.texts[state.language].home.book} <i class="ti-arrow-right"></i></a>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            {/*seccion standard rooms*/}
            <Card>
                <Row className="room-container">
                        <div className="room-article-container">
                            <div className="room-title">
                                <h2>{state.texts[state.language].rooms.room.standard.title}</h2>
                            </div>
                            <hr/>
                                <p className="room-description">{state.texts[state.language].rooms.room.standard.description}</p>
                                <div className="services-room">
                                   <ul>
                                       <li></li>
                                       <li></li>
                                       <li></li>
                                    </ul> 
                                </div>
                        </div>
                    </Row>
                    <hr/>
                    <Card.Body>
                        <Row pb={3} mt={4}>
                                <Col md={6} xl={4} mb={5}>
                                    <Card className="card card-explore" style={{ marginTop: '40px'}}>
                                        <div className="card-explore__img">
                                            <Card.Img className="card-img" src={standardDoble} alt=""/>
                                        </div>
                                        <Card.Body className="card-body">
                                            <h3 className="card-explore__title"><a href="#">{state.texts[state.language].rooms.room.doble.standard}</a></h3>
                                            <p>{state.texts[state.language].rooms.room.doble.description}</p>
                                            <a className="card-explore__link" target="_blank" href="https://reservations.travelclick.com/106660?languageid=2%20#/guestsandrooms">{state.texts[state.language].home.book} <i className="ti-arrow-right"></i></a>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6} xl={4} mb={5}>
                                    <Card className="card card-explore" style={{ marginTop: '40px'}}>
                                        <div className="card-explore__img">
                                            <Card.Img className="card-img" src="" alt=""/>
                                        </div>
                                        <Card.Body className="card-body">
                                            <h3 className="card-explore__title"><a href="#">{state.texts[state.language].rooms.room.triple.standard}</a></h3>
                                            <p>{state.texts[state.language].rooms.room.triple.description}</p>
                                            <a className="card-explore__link" target="_blank" href="https://reservations.travelclick.com/106660?languageid=2%20#/guestsandrooms">{state.texts[state.language].home.book} <i className="ti-arrow-right"></i></a>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6} xl={4} mb={5}>
                                    <Card className="card card-explore" style={{ marginTop: '40px'}}>
                                        <div className="card-explore__img">
                                            <Card.Img className="card-img" src="" alt=""/>
                                        </div>
                                        <Card.Body className="card-body">
                                            <h3 className="card-explore__title"><a href="#">{state.texts[state.language].rooms.room.cuadruple.standard}</a></h3>
                                            <p>{state.texts[state.language].rooms.room.cuadruple.description}</p>
                                            <a className="card-explore__link" target="_blank" href="https://reservations.travelclick.com/106660?languageid=2%20#/guestsandrooms">{state.texts[state.language].home.book} <i className="ti-arrow-right"></i></a>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                    </Card.Body>
            </Card>              
    </div>
    )
}

export default Rooms