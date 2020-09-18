import React from 'react';
import CardBack from './CardBack';
import { Context } from '../../../../Context/Provider';
import AnswersButtons from './AnwersButtons'

  const CardQuestion =(props)=>{
    console.log(props)
      return(
        <div>
            <p>{props.question}{props.points}</p>
                  <AnswersButtons
                  correct={props.correct} 
                  incorrect={props.incorrect}
                  points={props.points}
                  />
        </div>
    )  
  }

export default CardQuestion