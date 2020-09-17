import React from 'react';
import './Trivia.css';
import CardInitial from './Card/CardInitial';
import Row from 'react-bootstrap/Row';
import { Context } from '../../../Context/Provider';
import { Shuffle } from '../../../Utils/common';
import triviaTitleEs from "../../img/games/trivia/title_trivia_es.png";
import triviaTitleEn from "../../img/games/trivia/title_trivia_en.png";

const Trivia =()=>{
    
    const { state } = React.useContext(Context);
    
    let cardsShuffle = Shuffle ([...state.triviaQuestions[state.language].questions.dificulty1])
    
    const cards = cardsShuffle.filter(card => card.points === 100)
    const cards2 = cardsShuffle.filter(card => card.points === 200)
    const cards3 = cardsShuffle.filter(card => card.points === 300)
    const cards4 = cardsShuffle.filter(card => card.points === 400)
    cards.push(...cards2)
    cards.push(...cards3)
    cards.push(...cards4)
    console.log(cards)

   

    const language = () => {            
        const language = Context.language;
        return language;
    }

    return(
        <div className="trivial-grid">
            <div className="trivia-header">
                 <img className="trivia-logo" src={language() === 'spanish' ? triviaTitleEs : triviaTitleEn} />    
            </div>
            {cards.map(( card, i) => (
                    <Row bsPrefix="card-row">
                        <CardInitial style={{ width: '25vw' }}
                        points= {card.points}
                        question={card.question} 
                        correct={card.correct} 
                        incorrect={card.incorrect} 
                        />                           
                    </Row>
                ) 
            )} 
        </div>
    )
}

export default Trivia