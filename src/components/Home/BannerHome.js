import React, { useState } from 'react';
import '../../css/style.css';
import Carousel from 'react-bootstrap/Carousel';
import Sunset from '../img/gallery/sunset.png';
import Card1 from '../img/home/card-blog1.png';
import Card2 from '../img/home/card-blog2.png';
import { Context } from '../../Context/Provider';
import landing1 from '../img/home/lake.jpg';
import landing2 from '../img/home/hall2.jpg';
import landing3 from '../img/home/lake2.jpg';



const BannerHome = () => {
    const { state } = React.useContext(Context);

  return(
        <div>
          <Carousel interval={3000}>
               
                <Carousel.Item>
                    <img
                    className="d-block w-100 carousel-slide"
                    src={landing2}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h4>{state.texts[state.language].home.homeBanner}</h4>
                    <a className="button carousel-slide-btn" target="_blank" href={landing2}>{state.texts[state.language].home.book}</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 carousel-slide"
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
                    className="d-block w-100 carousel-slide"
                    src={landing3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h4>{state.texts[state.language].home.homeBanner}</h4>
                    <a className="button carousel-slide-btn" target="_blank" href={landing3}>{state.texts[state.language].home.book}</a>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default BannerHome