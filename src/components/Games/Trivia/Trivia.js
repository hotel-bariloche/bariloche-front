import React from 'react';
import './Trivia.css';
import CardInitial from './Card/CardInitial';
import Row from 'react-bootstrap/Row';
import { Context } from '../../../Context/Provider';
import { Shuffle } from '../../../Utils/common';

const Trivia =()=>{

    const { state } = React.useContext(Context);
    let cards = Shuffle ([...state.triviaQuestions[state.language].questions.dificulty1])
    
    return(
        <div className="trivial-grid">
            {cards.map(( card, i) => (
                <div className= "back-card">
                    <Row bsPrefix="card-row">
                        <CardInitial 
                        question={card.question} 
                        correct={card.correct} 
                        incorrect={card.incorrect} 
                        />                           
                    </Row>
                </div>
                ) 
            )} 
        </div>
    )
}

export default Trivia