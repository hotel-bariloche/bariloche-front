import React, { useState } from 'react';
import '../../css/style.css';
import Carousel from 'react-bootstrap/Carousel';
import Sunset from '../img/gallery/sunset.png';
import Card1 from '../img/home/card-blog1.png';
import Card2 from '../img/home/card-blog2.png';
import { Context } from '../../Context/Provider';
import landing1 from '../img/home/lake.jpg';



const BannerHome = () => {
    const { state } = React.useContext(Context);

  return(
        <div>
          <Carousel interval={3000}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={landing1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h4>{state.texts[state.language].home.homeBanner}</h4>
                    <a className="button carousel-slide-btn" target="_blank" href={landing1}>{state.texts[state.language].home.book}</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Sunset}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h4>{state.texts[state.language].home.homeBanner}</h4>
                    <a className="button carousel-slide-btn" target="_blank" href="https://reservations.travelclick.com/106660?languageid=2%20#/guestsandrooms">{state.texts[state.language].home.book}</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Sunset}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h4>{state.texts[state.language].home.homeBanner}</h4>
                    <a className="button carousel-slide-btn" target="_blank" href="https://reservations.travelclick.com/106660?languageid=2%20#/guestsandrooms">{state.texts[state.language].home.book}</a>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default BannerHome