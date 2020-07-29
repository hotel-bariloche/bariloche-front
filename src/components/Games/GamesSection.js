import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Context } from '../../Context/Provider';
import snakeEs from '../img/cardSnake-es.png';
import snakeEn from '../img/cardSnake-en.png';
import despiertapasajerosEs from '../img/cardDespiertapasajeros-es.png';
import despiertapasajerosEn from '../img/cardDespiertapasajeros-en.png';
import memoryEs from '../img/cardMemoryGame-es.png';
import memoryEn from '../img/cardMemoryGame-en.png';
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
                <div className="games-cards">
                    <Card style={{ width: '22rem'}}>
                    <Card.Img variant="top" src={state.language === 'spanish' ? snakeEs : snakeEn} />
                        <Card.Body bsPrefix="card-body">
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Link  to="/snake"><Button className="button carousel-slide-btn btn-games" variant="primary">{state.texts[state.language].games.play}</Button></Link>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '22rem' }}>
                    <Card.Img variant="top"  src={state.language === 'spanish' ? despiertapasajerosEs : despiertapasajerosEn} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Link to="/OneToFifty"><Button className="button carousel-slide-btn btn-games" variant="primary">{state.texts[state.language].games.play}</Button></Link>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={state.language === 'spanish' ? memoryEs : memoryEn} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Link to="/MemoryGame"><Button className="button carousel-slide-btn btn-games" variant="primary">{state.texts[state.language].games.play}</Button></Link>
                        </Card.Body>
                    </Card>
                </div>
        </div>
    
    )
}

export default GamesSection