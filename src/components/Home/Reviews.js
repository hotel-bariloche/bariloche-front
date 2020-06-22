import React, { Link } from 'react';
import Image from 'react-bootstrap/Image'
import { Container, Row, Col } from 'reactstrap';
import bed1 from '../img/home/bed-icon.png';
import testimonial1 from '../img/home/testimonial1.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card'



const Reviews = () => {
    const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
    };
  
    return (
  
  <div id="testiframe">
  
    <Carousel showDots autoPlay dotListClass infinite
      autoPlaySpeed={10000}
      responsive={responsive}
      removeArrowOnDeviceType={["tablet", "mobile", "desktop", "superLargeDesktop"]}
      className="section-margin">
        <div style={{width: '18rem'}} className="owl-carousel owl-theme testi-carousel testi-carousel__item">
          <a href='' className='media'>
            <img
              style={{ float: 'left'}}  
              className="testi-carousel__img"
              src={testimonial1}
              alt="Snake"
            />
          </a>
          <p className="media-body">El mítico juego de Nokia vuelve para engancharte de nuevo</p>
        </div >
        <div  style={{width: '18rem'}} className="owl-carousel owl-theme testi-carousel testi-carousel__item">
          <a href='' className='media'>
            <img
              style={{ float: 'left'}}  
              className="testi-carousel__img"
              src={testimonial1}
              alt="Snake"
            />
          </a>
          <p className="media-body">El mítico juego de Nokia vuelve para engancharte de nuevo</p>
        </div >
        <div style={{width: '18rem'}} className="owl-carousel owl-theme testi-carousel testi-carousel__item">
          <a href='' className='media'>
            <img
              style={{ float: 'left'}}  
              className="testi-carousel__img"
              src={testimonial1}
              alt="Snake"
            />
          </a>
          <p className="media-body">El mítico juego de Nokia vuelve para engancharte de nuevo</p>
        </div >
        <div style={{width: '18rem'}}  className="owl-carousel owl-theme testi-carousel testi-carousel__item">
          <a href='' className='media'>
            <img
              style={{ float: 'left'}}  
              className="testi-carousel__img"
              src={testimonial1}
              alt="Snake"
            />
          </a>
          <p className="media-body">El mítico juego de Nokia vuelve para engancharte de nuevo</p>
        </div >
        
    </Carousel>
  
  </div>
  
  )
  
    }

    export default Reviews