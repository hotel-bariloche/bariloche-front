import React from 'react';
import {Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { Context } from '../../Context/Provider';
import snake from '../img/cardSnake.png';
import OneToFifty from '../img/iframeOneToFifty.png';
import memory from '../img/cardMemoryGame.png';
import './GamesSection.css';

const GamesSection = () => {
    const { state } = React.useContext(Context);
    return(
        <div className="gameSectionContainer">
                <div>
                    <div className="games-title">
                    <h2>{state.texts[state.language].games.description}</h2>
                    <hr/>
                    </div>
                </div>
            <Carousel interval={3000} className="gamesContainer">
               
                <Carousel.Item>
                    <img
                    className="d-block w-100 carousel-slide-games"
                    src={snake}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <Link className="button carousel-slide-btn btn-games" to="/snake">{state.texts[state.language].games.play}</Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 carousel-slide-games"
                    src={OneToFifty}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <Link className="button carousel-slide-btn btn-games" to="/OneToFifty">{state.texts[state.language].games.play}</Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 carousel-slide-games"
                    src={memory}
                    alt="Third slide"
                    />

                    <Carousel.Caption>

                    <Link className="button carousel-slide-btn btn-games"  to="/MemoryGame">{state.texts[state.language].games.play}</Link>
                    </Carousel.Caption>
                </Carousel.Item>
    
            </Carousel>
        </div>
    
    )
}

export default GamesSection