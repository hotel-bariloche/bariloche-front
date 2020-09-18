import React, {useEffect} from 'react';
import './Trivia.css';
import CardInitial from './Card/CardInitial';
import Row from 'react-bootstrap/Row';
import { Context } from '../../../Context/Provider';
import { Shuffle } from '../../../Utils/common';
import triviaTitleEs from "../../img/games/trivia/title_trivia_es.png";
import triviaTitleEn from "../../img/games/trivia/title_trivia_en.png";
import TriviaFinalPopUp from './TriviaFinalPopUp';

const Trivia =()=>{
    
    const { state } = React.useContext(Context);
    const [cards, setCards] = React.useState([])

    useEffect(() => {
        let cardsShuffle = Shuffle ([...state.triviaQuestions[state.language].questions.dificulty1])
    
        const cards = cardsShuffle.filter(card => card.points === 100).slice(0,4)
        const cards2 = cardsShuffle.filter(card => card.points === 200).slice(0,4)
        const cards3 = cardsShuffle.filter(card => card.points === 300).slice(0,4)
        const cards4 = cardsShuffle.filter(card => card.points === 400).slice(0,4)
        cards.push(...cards2)
        cards.push(...cards3)
        cards.push(...cards4)
        setCards(cards)

    }, [])



    return(
        <div className="trivial-grid">
            <div className="trivia-header">
                 <img className="trivia-logo" src={state.language === 'spanish' ? triviaTitleEs : triviaTitleEn} />    
            </div>
            {state.countClicks === 5 
            ? 
                <TriviaFinalPopUp /> 
            :
                cards.map(( card, i) => (
                        <Row bsPrefix="card-row">
                            <CardInitial style={{ width: '25vw' }}
                            points= {card.points}
                            question={card.question} 
                            correct={card.correct} 
                            incorrect={card.incorrect} 
                            />                           
                        </Row>
                    ) 
                )
            }
            
        </div>
    )
}

export default Trivia