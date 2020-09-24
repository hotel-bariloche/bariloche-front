import React, {useEffect} from 'react';
import './Trivia.css';
import CardInitial from './Card/CardInitial';
import Row from 'react-bootstrap/Row';
import { Context } from '../../../Context/Provider';
import { Shuffle } from '../../../Utils/common';
import triviaTitleEs from "../../img/games/trivia/title_trivia_es.png";
import triviaTitleEn from "../../img/games/trivia/title_trivia_en.png";
import TriviaFinalPopUp from './TriviaFinalPopUp';
import CloseButtonTrivia from './CloseButtonTrivia';
import InstructionTrivia from './InstructionTrivia';
import Popup from '../Modal/Popup';


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
        <div>
         <Popup 
          className1='all-modal-trivia'
          className="generalModalTitle generalModalTitle-brown"
          description={state.texts[state.language].trivia.popup_description} 
          instruction1={state.texts[state.language].trivia.instruction1}
          instruction2={state.texts[state.language].trivia.instruction2}
          instruction3={state.texts[state.language].trivia.instruction3}
          instruction4={state.texts[state.language].trivia.instruction4}
        />
        </div>
            <div className="triviaButtons">
              <InstructionTrivia />
              <CloseButtonTrivia />              
            </div>
            <div className="trivia-header">
                 <img className="trivia-logo" alt="logo-trivia" src={state.language === 'spanish' ? triviaTitleEs : triviaTitleEn} />    
            </div>
          
            <div style={{ width: '100vw'}}><h2>{state.score}</h2></div>
            {state.countClicks === 5  
            ? 
                <TriviaFinalPopUp /> 
            :
                cards.map(( card, i) => (
                        <Row bsPrefix="card-row"                         >
                            <CardInitial style={{ width: '25vw' }}
                            points= {card.points}
                            question={card.question} 
                            correct={card.correct} 
                            incorrect={card.incorrect} 
                            key={i}
                            id={card.id}
                            />                           
                        </Row>
                    ) 
                )
            }
            
        </div>
    )
}


export default Trivia