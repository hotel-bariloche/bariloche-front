import React from 'react';
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
                score={props.score}
                />
      </div>
   
    )  
  }

export default CardQuestion