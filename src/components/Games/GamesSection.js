import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Context } from '../../Context/Provider';
import snakeEs from '../img/games/cardSnake-es.png';
import snakeEn from '../img/games/cardSnake-en.png';
import despiertapasajerosEs from '../img/games/cardDespiertapasajeros-es.png';
import despiertapasajerosEn from '../img/games/cardDespiertapasajeros-en.png';
import memoryEs from '../img/games/cardMemoryGame-es.png';
import memoryEn from '../img/games/cardMemoryGame-en.png';
import './GamesSection.css';
import triviaEs from '../img/games/trivia/card_trivia_es.png';
import triviaEn from '../img/games/trivia/card_trivia_en.png';

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
                    <Card style={{ width: '22rem'}} className="game-card">
                    <Card.Img variant="top" src={state.language === 'spanish' ? snakeEs : snakeEn} />
                        <Card.Body bsPrefix="card-body">
                            <Card.Title>{state.texts[state.language].games.card_titleCazanieves}</Card.Title>
                            <Card.Text>
                                {state.texts[state.language].games.cardShortDescriptionCazanieves}
                            </Card.Text>
                            <Link  to="/snake"><Button className="button carousel-slide-btn btn-games" variant="primary">{state.texts[state.language].games.play}</Button></Link>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '22rem' }} className="game-card">
                    <Card.Img variant="top"  src={state.language === 'spanish' ? despiertapasajerosEs : despiertapasajerosEn} />
                        <Card.Body>
                            <Card.Title>{state.texts[state.language].games.card_titleDespierta}</Card.Title>
                            <Card.Text>
                                {state.texts[state.language].games.cardShortDescriptionDespierta}
                            </Card.Text>
                            <Link to="/OneToFifty"><Button className="button carousel-slide-btn btn-games" variant="primary">{state.texts[state.language].games.play}</Button></Link>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '22rem' }} className="game-card">
                    <Card.Img variant="top" src={state.language === 'spanish' ? memoryEs : memoryEn} />
                        <Card.Body>
                            <Card.Title>{state.texts[state.language].games.card_titleMemotest}</Card.Title>
                            <Card.Text>
                                {state.texts[state.language].games.cardShortDescriptionMemotest}
                            </Card.Text>
                            <Link to="/MemoryGame"><Button className="button carousel-slide-btn btn-games" variant="primary">{state.texts[state.language].games.play}</Button></Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '22rem' }} className="game-card">
                    <Card.Img variant="top" src={state.language === 'spanish' ? triviaEs : triviaEn} />
                        <Card.Body>
                            <Card.Title>{state.texts[state.language].games.card_titleTrivia}</Card.Title>
                            <Card.Text>
                                {state.texts[state.language].games.cardShortDescriptionTrivia}
                            </Card.Text>
                            <Link to="/Trivia"><Button className="button carousel-slide-btn btn-games" variant="primary">{state.texts[state.language].games.play}</Button></Link>
                        </Card.Body>
                    </Card>
                </div>
        </div>
    
    )
}

export default GamesSection