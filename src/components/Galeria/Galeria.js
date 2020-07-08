import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import ModalImage from 'react-modal-image'
import Image from 'react-bootstrap/Image'
import bed1 from '../img/home/bed-icon.png'
import barilo from '../img/gallery/barilo.jpg'
import barilo2 from '../img/gallery/barilo2.jpg'
import barilo3 from '../img/gallery/barilo3.jpg'
import dobleroom from '../img/gallery/dobleroom.jpg'
import hall from '../img/gallery/hall.jpg'
import hotelbarilo from '../img/gallery/hotelbarilo.jpg'
import sabores from '../img/gallery/sabores.jpg'
import hotelinside2 from '../img/gallery/hotelinside2.jpg'
import reception2 from '../img/gallery/reception2.jpg'
import economytriple from '../img/gallery/economy-triple.jpg'
import buffet from '../img/gallery/buffet.jpg'
import buffet2 from '../img/gallery/buffet2.jpg'
import buffet3 from '../img/gallery/buffet3.jpg'
import buffet4 from '../img/gallery/buffet4.jpg'
import buffet5 from '../img/gallery/buffet5.jpg'
import buffet6 from '../img/gallery/buffet6.jpg'
import buffet7 from '../img/gallery/buffet7.jpg'
import coffee from '../img/gallery/coffee.jpg'
import { Context } from '../../Context/Provider'
import Booking from '../Booking/Booking'

const Galeria = () => {
  const { state, changeLanguage } = React.useContext(Context)
  return (
    <div>
      <section className="blog-banner-area" id="blog">
        <Container className="container h-100">
          <div className="blog-banner">
            <div className="text-center">
              <h1>{state.texts[state.language].gallery.title}</h1>
              <nav aria-label="breadcrumb" className="banner-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {state.texts[state.language].gallery.title}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </Container>
      </section>
      <Booking/>
      <section className="section-margin">
        <Container className="">
          <div className="section-intro text-center pb-80px">
            <div className="section-intro__style">
              <Image src={bed1} alt=""></Image>
            </div>
            <h2>{state.texts[state.language].gallery.ourGallery}</h2>
          </div>

          <Row className="row">
            <Col md={4}>
              <Row className="row">
                <Col className="col-12 mb-4">
                  <div className="single-imgs relative">
                    <div className="overlay overlay-bg"></div>
                    <div className="relative">
                      <ModalImage
                        small={barilo}
                        large={barilo}
                        className="card-img rounded-0"
                        alt=""
                        hideDownload={true}
                        hideZoom={true}
                      />
                    </div>
                  </div>
                </Col>
                <Col className="col-12 mb-4">
                    <div className="single-imgs relative">
                      <div className="overlay overlay-bg"></div>
                      <div className="relative">
                        <ModalImage
                          small={dobleroom}
                          large={dobleroom}
                          className="card-img rounded-0"
                          alt=""
                          hideDownload={true}
                          hideZoom={true}
                        />
                      </div>
                    </div>
                </Col>
                <Col className="col-12 mb-4">
                    <div className="single-imgs relative">
                      <div className="overlay overlay-bg"></div>
                      <div className="relative">
                        <ModalImage
                          small={hall}
                          large={hall}
                          className="card-img rounded-0"
                          alt=""
                          hideDownload={true}
                          hideZoom={true}
                        />
                      </div>
                    </div>
                </Col>
              </Row>
            </Col>

            <Col md={4}>
              <Row className="row">
                <Col className="col-12 mb-4">
                    <div className="single-imgs relative">
                      <div className="overlay overlay-bg"></div>
                      <div className="relative">
                        <ModalImage
                          small={barilo2}
                          large={barilo2}
                          className="card-img rounded-0"
                          alt=""
                          hideDownload={true}
                          hideZoom={true}
                        />
                      </div>
                    </div>
                </Col>
                <Col className="col-12 mb-4">
                    <div className="single-imgs relative">
                      <div className="overlay overlay-bg"></div>
                      <div className="relative">
                        <ModalImage
                          small={hotelinside2}
                          large={hotelinside2}
                          className="card-img rounded-0"
                          alt=""
                          hideDownload={true}
                          hideZoom={true}
                        />
                      </div>
                    </div>
                </Col>
                <Col className="col-12 mb-4">
                    <div className="single-imgs relative">
                      <div className="overlay overlay-bg"></div>
                      <div className="relative">
                        <ModalImage
                          small={reception2}
                          large={reception2}
                          className="card-img rounded-0"
                          alt=""
                          hideDownload={true}
                          hideZoom={true}
                        />
                      </div>
                    </div>
                </Col>
              </Row>
            </Col>
            <Col md={4}>
              <Row className="row">
                <Col className="col-12 mb-4">
                    <div className="single-imgs relative">
                      <div className="overlay overlay-bg"></div>
                      <div className="relative">
                        <ModalImage
                          small={barilo3}
                          large={barilo3}
                          className="card-img rounded-0"
                          alt=""
                          hideDownload={true}
                          hideZoom={true}
                        />
                      </div>
                    </div>
                </Col>
                <Col className="col-12 mb-4">
                    <div className="single-imgs relative">
                      <div className="overlay overlay-bg"></div>
                      <div className="relative">
                        <ModalImage
                          small={economytriple}
                          large={economytriple}
                          className="card-img rounded-0"
                          alt=""
                          hideDownload={true}
                          hideZoom={true}
                        />
                      </div>
                    </div>
                </Col>
                <Col className="col-12 mb-4">
                    <div className="single-imgs relative">
                      <div className="overlay overlay-bg"></div>
                      <div className="relative">
                        <ModalImage
                          small={coffee}
                          large={coffee}
                          className="card-img rounded-0"
                          alt=""
                          hideDownload={true}
                          hideZoom={true}
                        />
                      </div>
                    </div>
                </Col>
              </Row>
            </Col>
            <Col md={4}>
              <Row className="row">
                <Col className="col-12 mb-4">
                    <div className="single-imgs relative">
                      <div className="overlay overlay-bg"></div>
                      <div className="relative">
                        <ModalImage
                          small={hotelbarilo}
                          large={hotelbarilo}
                          className="card-img rounded-0"
                          alt=""
                          hideDownload={true}
                          hideZoom={true}
                        />
                      </div>
                    </div>
                </Col>
                <Col className="col-12 mb-4">
                    <div className="single-imgs relative">
                      <div className="overlay overlay-bg"></div>
                      <div className="relative">
                        <ModalImage
                          small={buffet}
                          large={buffet}
                          className="card-img rounded-0"
                          alt=""
                          hideDownload={true}
                          hideZoom={true}
                        />
                      </div>
                    </div>
                </Col>
                <Col className="col-12 mb-4">
                    <div className="single-imgs relative">
                      <div className="overlay overlay-bg"></div>
                      <div className="relative">
                        <ModalImage
                          small={sabores}
                          large={sabores}
                          className="card-img rounded-0"
                          alt=""
                          hideDownload={true}
                          hideZoom={true}
                        />
                      </div>
                    </div>
                </Col>
              </Row>
            </Col>
            <Col md={4}>
              <Row className="row">
                <Col className="col-12 mb-4">
                    <div className="single-imgs relative">
                      <div className="overlay overlay-bg"></div>
                      <div className="relative">
                        <ModalImage
                          small={buffet2}
                          large={buffet2}
                          className="card-img rounded-0"
                          alt=""
                          hideDownload={true}
                          hideZoom={true}
                        />
                      </div>
                    </div>
                </Col>
                <Col className="col-12 mb-4">
                    <div className="single-imgs relative">
                      <div className="overlay overlay-bg"></div>
                      <div className="relative">
                        <ModalImage
                          small={buffet3}
                          large={buffet3}
                          className="card-img rounded-0"
                          alt=""
                          hideDownload={true}
                          hideZoom={true}
                        />
                      </div>
                    </div>
                </Col>
                <Col className="col-12 mb-4">
                    <div className="single-imgs relative">
                      <div className="overlay overlay-bg"></div>
                      <div className="relative">
                        <ModalImage
                          small={buffet4}
                          large={buffet4}
                          className="card-img rounded-0"
                          alt=""
                          hideDownload={true}
                          hideZoom={true}
                        />
                      </div>
                    </div>
                </Col>
              </Row>
            </Col>
            <Col md={4}>
              <Row className="row">
                <Col className="col-12 mb-4">
                    <div className="single-imgs relative">
                      <div className="overlay overlay-bg"></div>
                      <div className="relative">
                        <ModalImage
                          small={buffet5}
                          large={buffet5}
                          className="card-img rounded-0"
                          alt=""
                          hideDownload={true}
                          hideZoom={true}
                        />
                      </div>
                    </div>
                </Col>
                <Col className="col-12 mb-4">
                    <div className="single-imgs relative">
                      <div className="overlay overlay-bg"></div>
                      <div className="relative">
                        <ModalImage
                          small={buffet6}
                          large={buffet6}
                          className="card-img rounded-0"
                          alt=""
                          hideDownload={true}
                          hideZoom={true}
                        />
                      </div>
                    </div>
                </Col>
                <Col className="col-12 mb-4">
                    <div className="single-imgs relative">
                      <div className="overlay overlay-bg"></div>
                      <div className="relative">
                        <ModalImage
                          small={buffet7}
                          large={buffet7}
                          className="card-img rounded-0"
                          alt=""
                          hideDownload={true}
                          hideZoom={true}
                        />
                      </div>
                    </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Galeria
