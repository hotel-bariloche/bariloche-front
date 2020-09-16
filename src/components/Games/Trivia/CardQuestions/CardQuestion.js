import React from 'react';
import AnswersButtons from './AnwersButtons'

const CardQuestion =(props)=>{
    return(
      <div>
          <p>{props.question}</p>
                <AnswersButtons
                correct={props.correct} 
                incorrect={props.incorrect}
                />
      </div>
   
    )  
  }

export default CardQuestion