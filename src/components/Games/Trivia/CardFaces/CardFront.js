import React from 'react';
import CardBack from './CardBack';
import { Context } from '../../../../Context/Provider'

const CardFront =()=>{
  const [flip, setFlip] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const { state } = React.useContext(Context);

 const Flipped=()=>{
  setFlip(!flip)
  setCount(count+1)
  }

  let cards = [...state.triviaQuestions[state.language].questions.dificulty1]
  let answer = [...state.triviaQuestions[state.language].questions.dificulty1]
  
    return(
      <div>
        {cards.map(( card, i) => (
          
             <div className= "back-card">
              <p>{card.question}</p>
             <div>
              {answer.map(( answer, i) => (
                <button value={answer.incorrect} key={i}>
                  {answer.incorrect}
                </button>
                )
              )}
              </div>
           
              </div>
          ) 
        )}
     
          </div>
    )
    
  }
export default CardFront