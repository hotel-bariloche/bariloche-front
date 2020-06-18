import React from 'react';
import Image from 'react-bootstrap/Image'
import { Container, Row, Col } from 'reactstrap';
import Card from 'react-bootstrap/Card'
import room1 from '../img/home/explore1.png';
import room2 from '../img/home/explore2.png';
import room3 from '../img/home/explore3.png';
import room4 from '../img/home/explore4.png';
import room5 from '../img/home/explore5.png';
import room6 from '../img/home/explore6.png';
import bed1 from '../img/home/bed-icon.png';



const Rooms = () => {
    return(
    <div>
        <section className="blog-banner-area" id="blog">
            <div className="container h-100">
                <div className="blog-banner">
                    <div className="text-center">
                        <h1>Nuestras Habitaciones</h1>
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
        <Container>
            <Row pb={4} mt={5}>
                <Col md={6} xl={4} mb={5}>
                    <Card class="card card-explore" style={{ marginTop: '40px'}}>
                        <div class="card-explore__img">
                        <Card.Img class="card-img" src={room1} alt=""/>
                        </div>
                        <Card.Body class="card-body">
                        <h3 class="card-explore__price">$150.00 <sub>/ Per Night</sub></h3>
                        <h4 class="card-explore__title"><a href="#">Economic Room</a></h4>
                        <p>Beginning fourth dominion creeping god was. Beginning, which fly yieldi dry beast moved blessed </p>
                        <a class="card-explore__link" href="#">Book Now <i class="ti-arrow-right"></i></a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4} mb={5}>
                    <Card class="card card-explore" style={{ marginTop: '40px'}}>
                        <div class="card-explore__img">
                        <Card.Img class="card-img" src={room2} alt=""/>
                        </div>
                        <Card.Body class="card-body">
                        <h3 class="card-explore__price">$150.00 <sub>/ Per Night</sub></h3>
                        <h4 class="card-explore__title"><a href="#">Standard Room</a></h4>
                        <p>Beginning fourth dominion creeping god was. Beginning, which fly yieldi dry beast moved blessed </p>
                        <a class="card-explore__link" href="#">Book Now <i class="ti-arrow-right"></i></a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4} mb={5}>
                    <Card class="card card-explore" style={{ marginTop: '40px'}}>
                        <div class="card-explore__img">
                        <Card.Img class="card-img" src={room3} alt=""/>
                        </div>
                        <Card.Body class="card-body">
                        <h3 class="card-explore__price">$150.00 <sub>/ Per Night</sub></h3>
                        <h4 class="card-explore__title"><a href="#">Doble Room</a></h4>
                        <p>Beginning fourth dominion creeping god was. Beginning, which fly yieldi dry beast moved blessed </p>
                        <a class="card-explore__link" href="#">Book Now <i class="ti-arrow-right"></i></a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4} mb={5}>
                    <Card class="card card-explore" style={{ marginTop: '40px'}}>
                        <div class="card-explore__img">
                        <Card.Img class="card-img" src={room4} alt=""/>
                        </div>
                        <Card.Body class="card-body">
                        <h3 class="card-explore__price">$150.00 <sub>/ Per Night</sub></h3>
                        <h4 class="card-explore__title"><a href="#">Triple Room</a></h4>
                        <p>Beginning fourth dominion creeping god was. Beginning, which fly yieldi dry beast moved blessed </p>
                        <a class="card-explore__link" href="#">Book Now <i class="ti-arrow-right"></i></a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4} mb={5}>
                    <Card class="card card-explore" style={{ marginTop: '40px'}}>
                        <div class="card-explore__img">
                        <Card.Img class="card-img" src={room5} alt=""/>
                        </div>
                        <Card.Body class="card-body">
                        <h3 class="card-explore__price">$150.00 <sub>/ Per Night</sub></h3>
                        <h4 class="card-explore__title"><a href="#">Cuádruple Room</a></h4>
                        <p>Beginning fourth dominion creeping god was. Beginning, which fly yieldi dry beast moved blessed </p>
                        <a class="card-explore__link" href="#">Book Now <i class="ti-arrow-right"></i></a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4} mb={5}>
                    <Card class="card card-explore" style={{ marginTop: '40px'}}>
                        <div class="card-explore__img">
                        <Card.Img class="card-img" src={room6} alt=""/>
                        </div>
                        <Card.Body class="card-body">
                        <h3 class="card-explore__price">$150.00 <sub>/ Per Night</sub></h3>
                        <h4 class="card-explore__title"><a href="#">Classic Bed Room</a></h4>
                        <p>Beginning fourth dominion creeping god was. Beginning, which fly yieldi dry beast moved blessed </p>
                        <a class="card-explore__link" href="#">Book Now <i class="ti-arrow-right"></i></a>
                        </Card.Body>
                    </Card>
                </Col>
        </Row> 
       </Container>
    </div>
    )
}

export default Rooms