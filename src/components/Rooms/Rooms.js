import React, {useState} from 'react';
import { Row, Col } from 'reactstrap';
import Card from 'react-bootstrap/Card'
import economyDoble from '../img/hotel/economy-doble.jpg';
import standardDoble from '../img/hotel/standard-doble.jpg';
import economyTriple from '../img/hotel/economy-triple.jpg';
import standardTriple from '../img/hotel/standard-triple.jpg';
import economyCuadruple from '../img/hotel/cuadruple-economy.jpg';
import { FaWifi, FaRegSnowflake, FaRegSmile } from 'react-icons/fa';
import { GiWineBottle, GiTwirlyFlower, GiExitDoor } from "react-icons/gi";
import { AiOutlineCoffee, AiOutlineStar } from "react-icons/ai";
import './Rooms.css';
import { Context } from '../../Context/Provider';
import Booking from '../Booking/Booking';
import { ModalCarousel } from '../Modal'
import { standardDobleList, standardTripleList, standardCuadrupleList, economyDobleList, economyTripleList, economyCuadrupleList } from './data'

const Rooms = () => {
    const { state } = React.useContext(Context);
    const [show, setShow] = useState(false);    
    const [list, setList] = useState([]);
    const handleClose = () => setShow(false);

    const handleShowModal = (newList) => {      
        setList(newList);  
        setShow(true);
    }

    return(
    <div> 
        <ModalCarousel list={list} show={show} handleClose={handleClose}/>
        <section className="rooms-banner-area">
            <div className="container h-100">
                <div className="blog-banner">
                    <div className="text-center">
                        <h1>{state.texts[state.language].rooms.banner}</h1>
                    <nav aria-label="breadcrumb" className="banner-breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">{state.texts[state.language].rooms.bannerText}</li>
                        </ol>
                    </nav>
                    </div>
                </div>
            </div>
        </section>
        <Booking/>
        <Card>
                <Row className="room-container" id="standard">
                        <div className="room-article-container">
                            <div className="room-title">
                                <h2>{state.texts[state.language].rooms.room.standard.title}</h2>
                            </div>
                            <Card.Body>
                                <Row pb={3} mt={4}>
                                        <Col md={6} xl={4} mb={5}>
                                            <Card className="card card-explore" style={{ marginTop: '40px'}}>
                                                <div className="card-explore__img">
                                                    <Card.Img className="card-img" src={standardDoble} alt="1 matrimonial bed or 2 beds" onClick={() => handleShowModal(standardDobleList)} />
                                                </div>
                                                <Card.Body className="card-body">
                                                    <h3 className="card-explore__title">{state.texts[state.language].rooms.room.doble.standard}</h3>
                                                    <p>{state.texts[state.language].rooms.room.doble.description}</p>
                                                    <a className="card-explore__link" target="_blank" href="https://reservations.travelclick.com/106660?languageid=2%20#/guestsandrooms">{state.texts[state.language].home.book} <i className="ti-arrow-right"></i></a>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col md={6} xl={4} mb={5}>
                                            <Card className="card card-explore" style={{ marginTop: '40px'}}>
                                                <div className="card-explore__img">
                                                    <Card.Img className="card-img" src={standardTriple} alt="3 beds" onClick={() => handleShowModal(standardTripleList)}/>
                                                </div>
                                                <Card.Body className="card-body">
                                                    <h3 className="card-explore__title">{state.texts[state.language].rooms.room.triple.standard}</h3>
                                                    <p>{state.texts[state.language].rooms.room.triple.description}</p>
                                                    <a className="card-explore__link" target="_blank" href="https://reservations.travelclick.com/106660?languageid=2%20#/guestsandrooms">{state.texts[state.language].home.book} <i className="ti-arrow-right"></i></a>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col md={6} xl={4} mb={5}>
                                            <Card className="card card-explore" style={{ marginTop: '40px'}}>
                                                <div className="card-explore__img">
                                                    <Card.Img className="card-img" src={standardTriple} alt="" onClick={() => handleShowModal(standardCuadrupleList)}/>
                                                </div>
                                                <Card.Body className="card-body">
                                                    <h3 className="card-explore__title">{state.texts[state.language].rooms.room.cuadruple.standard}</h3>
                                                    <p>{state.texts[state.language].rooms.room.cuadruple.description}</p>
                                                    <a className="card-explore__link" target="_blank" href="https://reservations.travelclick.com/106660?languageid=2%20#/guestsandrooms">{state.texts[state.language].home.book} <i className="ti-arrow-right"></i></a>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                            </Card.Body>
                            <hr/>
                                <p className="room-description">{state.texts[state.language].rooms.room.standard.description}</p>
                                <header>{state.texts[state.language].rooms.service}</header>
                                <div className="services-room">
                                   <ul className="services-room">
                                       <li><p><AiOutlineCoffee/>{state.texts[state.language].rooms.services.teaCoffee}</p></li>
                                       <li><p><FaRegSmile/>{state.texts[state.language].rooms.services.space}</p></li>
                                       <li><p><AiOutlineStar/>Amenities</p></li>
                                       <li><p><GiTwirlyFlower/>{state.texts[state.language].rooms.services.decorated}</p></li>
                                    </ul> 
                                </div>
                                <div className="conected-rooms">
                                    <div className="box-destacada">
                                        <div className="content-destacado">
                                            <h5>{state.texts[state.language].rooms.destacada1}<br/><br/></h5> 
                                        </div>
                                    </div>
                                    <GiExitDoor/>
                                    <div className="box-destacada">
                                        <div className="content-destacado">
                                            <h5>{state.texts[state.language].rooms.destacada2}</h5> 
                                        </div>
                                    </div>
                                </div>
                                
                        </div>
                    </Row>
                    <hr/>
                   
            </Card>  
            <Card>
                    <Row className="room-container" id="economy">
                        <div className="room-article-container">
                            <div className="room-title">
                                <h2>{state.texts[state.language].rooms.room.economy.title}</h2>
                            </div>
                            <Card.Body>
                                <Row pb={3} mt={4}>   
                                    <Col md={6} xl={4} mb={5}>
                                        <Card className="card card-explore" style={{ marginTop: '40px'}}>
                                            <div className="card-explore__img">
                                                <Card.Img className="card-img" src={economyDoble} alt="2 beds or 1 matrimonial bed"  onClick={() => handleShowModal(economyDobleList)}/>
                                            </div>
                                            <Card.Body className="card-body">
                                                <h3 className="card-explore__title">{state.texts[state.language].rooms.room.doble.economy}</h3>
                                                <p>{state.texts[state.language].rooms.room.doble.description}</p>
                                                <a className="card-explore__link" target="_blank" href="https://reservations.travelclick.com/106660?languageid=2%20#/guestsandrooms">{state.texts[state.language].home.book} <i className="ti-arrow-right"></i></a>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={6} xl={4} mb={5}>
                                        <Card className="card card-explore" style={{ marginTop: '40px'}}>
                                            <div className="card-explore__img">
                                                <Card.Img className="card-img" src={economyTriple} alt="3 beds" onClick={() => handleShowModal(economyTripleList)}/>
                                            </div>
                                            <Card.Body className="card-body">
                                                <h3 className="card-explore__title">{state.texts[state.language].rooms.room.triple.economy}</h3>
                                                <p>{state.texts[state.language].rooms.room.triple.description}</p>
                                                <a className="card-explore__link" target="_blank" href="https://reservations.travelclick.com/106660?languageid=2%20#/guestsandrooms">{state.texts[state.language].home.book} <i className="ti-arrow-right"></i></a>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={6} xl={4} mb={5}>
                                        <Card className="card card-explore" style={{ marginTop: '40px'}}>
                                            <div className="card-explore__img">
                                                <Card.Img className="card-img" src={economyCuadruple} alt="4 beds" onClick={() => handleShowModal(economyCuadrupleList)}/>
                                            </div>
                                            <Card.Body className="card-body">
                                                <h3 className="card-explore__title">{state.texts[state.language].rooms.room.cuadruple.economy}</h3>
                                                <p>{state.texts[state.language].rooms.room.cuadruple.description}</p>
                                                <a className="card-explore__link" target="_blank" href="https://reservations.travelclick.com/106660?languageid=2%20#/guestsandrooms">{state.texts[state.language].home.book} <i class="ti-arrow-right"></i></a>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Card.Body>


                            <hr/>
                                <p className="room-description">{state.texts[state.language].rooms.room.economy.description}</p>
                                <header>{state.texts[state.language].rooms.service}</header>
                                <div>
                                   <ul className="services-room">
                                       <li><p><FaWifi/>{state.texts[state.language].rooms.services.wifi}</p></li>
                                       <li><p><FaRegSnowflake/>{state.texts[state.language].rooms.services.air}</p></li>
                                       <li><p><GiWineBottle/>Minibar</p></li>
                                    </ul> 
                                </div>
                                <div className="conected-rooms">
                                    <div className="box-destacada">
                                        <div className="content-destacado">
                                            <h5>{state.texts[state.language].rooms.destacada1} <br/><br/></h5> 
                                        </div>
                                    </div>
                                    <GiExitDoor/>
                                    <div className="box-destacada">
                                        <div className="content-destacado">
                                            <h5>{state.texts[state.language].rooms.destacada2}</h5> 
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </Row>
                <hr/>
                   
            </Card>
            {/*seccion standard rooms*/}
                        
    </div>
    )
}

export default Rooms