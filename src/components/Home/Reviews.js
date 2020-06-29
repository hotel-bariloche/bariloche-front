import React, { Link } from 'react';
import Image from 'react-bootstrap/Image'
import { Container, Row, Col } from 'reactstrap';
import bed1 from '../img/home/bed-icon.png';
import testimonial1 from '../img/home/testimonial1.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Context } from '../../Context/Provider';




const Reviews = () => {
  const { state, changeLanguage } = React.useContext(Context);

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
  
  <Container id="reviews">
      <div class="section-intro text-center pb-20px">
            <div class="section-intro__style">
                <img src={bed1} alt=""></img>
            </div>
            <h2>{state.texts[state.language].home.guests.title}</h2>
        </div>
  
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
              src="https://media-cdn.tripadvisor.com/media/photo-t/1a/f6/f0/48/default-avatar-2020-15.jpg"
              alt="Pablo Gomez Sanchez"
            />
          </a>
          <div class="media-body">
               <p className="media-body">{state.texts[state.language].home.guests.cards.first.review}</p>
                  <div class="testi-carousel__intro">
                    <h3>{state.texts[state.language].home.guests.cards.first.name}</h3>
                    <p>{state.texts[state.language].home.guests.cards.first.country}</p>
                  </div>
                </div>
           </div >
      
        <div  style={{width: '18rem'}} className="owl-carousel owl-theme testi-carousel testi-carousel__item">
          <a href='' style={{ width: '100px', marginRight: '0'}} className='media'>
            <img
              style={{ float: 'left'}}  
              className="testi-carousel__img"
              src="https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/e8/ea/default-avatar-2020-63.jpg"
              alt="Luciana C"
            />
          </a>
          <div class="media-body">
              <p className="media-body">{state.texts[state.language].home.guests.cards.second.review}</p>
                  <div class="testi-carousel__intro">
                  <h3>{state.texts[state.language].home.guests.cards.second.name}</h3>
                   <p>{state.texts[state.language].home.guests.cards.second.country}</p>
                  </div>
                </div>
           </div >
        <div style={{width: '18rem'}} className="owl-carousel owl-theme testi-carousel testi-carousel__item">
          <a href='' className='media'>
            <img
              style={{ float: 'left'}}  
              className="testi-carousel__img"
              src="https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/ea/2e/default-avatar-2020-67.jpg"
              alt="Ernesto"
            />
          </a>
          <div class="media-body">
             <p className="media-body">{state.texts[state.language].home.guests.cards.third.review}</p>
                  <div class="testi-carousel__intro">
                  <h3>{state.texts[state.language].home.guests.cards.third.name}</h3>
                  <p>{state.texts[state.language].home.guests.cards.third.country}</p>

                  </div>
                </div>
           </div >
          
        <div style={{width: '18rem'}}  className="owl-carousel owl-theme testi-carousel testi-carousel__item">
          <a href='' className='media'>
            <img
              style={{ float: 'left'}}  
              className="testi-carousel__img"
              src="https://media-cdn.tripadvisor.com/media/photo-t/1a/f6/ec/a2/default-avatar-2020-3.jpg"
              alt="Lautaro Rosso"
            />
          </a>
          <div class="media-body">
             <p className="media-body">{state.texts[state.language].home.guests.cards.four.review}</p>
                  <div class="testi-carousel__intro">
                  <h3>{state.texts[state.language].home.guests.cards.four.name}</h3>
                  <p>{state.texts[state.language].home.guests.cards.four.country}</p>

                  </div>
                </div>
           </div >
        
    </Carousel>
  
  </Container>
  
  )
  
    }

    export default Reviews