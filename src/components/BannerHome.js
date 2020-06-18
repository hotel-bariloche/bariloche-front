import React, { useState } from 'react';
import '../css/style.css';
import Carousel from 'react-bootstrap/Carousel';
import Sunset from './img/gallery/sunset.png';
import Card1 from './img/home/card-blog1.png';
import Card2 from './img/home/card-blog2.png';
import { Context } from '../Context/Provider';


const BannerHome = () => {
    const { state } = React.useContext(Context);

  return(
        <div>
          <Carousel interval={3000}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Sunset}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h4>La inolvidable experiencia de disfrutar Bariloche más que nunca. A metros del Lago Nahuel Huapi, se encuentra nuestro hotel, con 75 habitaciones listas para recibirte.</h4>
                    <h1>Luxury <em>is</em> personal</h1>
                    <a className="button carousel-slide-btn" href="#">Reservar</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Sunset}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h4>Está pensado para aquellos visitantes que quieren venir a disfrutar de nuestro destino, pero a la vez poder relajarse en un lugar tranquilo, y así, poder seguir planeando la travesía.</h4>
                    <h1>Luxury <em>is</em> personal</h1>
                    <a className="button carousel-slide-btn" href="#">Reservar</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Sunset}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h4>Nuestros clientes son nuestros amigos e invitados, por lo tanto , estamos preparados para hacerte sentir en casa!</h4>
                    <h1>Luxury <em>is</em> personal</h1>
                    <a className="button carousel-slide-btn" href="#">Reservar</a>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default BannerHome