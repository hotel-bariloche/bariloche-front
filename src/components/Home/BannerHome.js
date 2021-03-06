import React, {useState} from 'react';
import '../../css/style.css';
import Carousel from 'react-bootstrap/Carousel';
import { Context } from '../../Context/Provider';
import landing1 from '../img/home/lake.jpg';
import landing2 from '../img/home/hall2.jpg';
import landing3 from '../img/home/lake2.jpg';



const BannerHome = () => {
    const { state } = React.useContext(Context);

    
 
  return(
        <div>
          <Carousel interval={3000} fade={true} >
               
                <Carousel.Item>
                    <img
                    className="d-block w-100 carousel-slide-home"
                    src={landing2}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h4>{state.texts[state.language].home.homeBanner}</h4>
                    <a className="button carousel-slide-btn" target="_blank" href="https://reservations.travelclick.com/106660?languageid=2%20#/guestsandrooms">{state.texts[state.language].home.book}</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 carousel-slide-home"
                    src={landing1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h4>{state.texts[state.language].home.homeBanner}</h4>
                    <a className="button carousel-slide-btn" target="_blank" href="https://reservations.travelclick.com/106660?languageid=2%20#/guestsandrooms">{state.texts[state.language].home.book}</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 carousel-slide-home"
                    src={landing3}
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