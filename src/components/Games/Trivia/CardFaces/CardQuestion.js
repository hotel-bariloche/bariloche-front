import React from 'react';
import { Context } from '../../../../Context/Provider';
import AnswersButtons from './AnwersButtons'

const CardQuestion =()=>{

  const [count, setCount] = React.useState(0);
  const { state } = React.useContext(Context);

  let cards = [...state.triviaQuestions[state.language].questions.dificulty1]
  let correctAnswer = []
    cards.map((card) => (
    correctAnswer.push(card.correct)
    ))

  let answers = []
    cards.map((card) => (
      answers.push(card.correct),
      card.incorrect.map(( answer, i)=>{
      answers.push(answer)
      })
    ))

  console.log(answers)
  console.log(cards)

    return(
      <div>
        {cards.map(( card, i) => (
            <div className= "back-card">
              <p>{card.question}</p>
                <div>
                  <AnswersButtons correct={card.correct} incorrects={card.incorrect}  />
                {/* <button id={i}>
                  {card.correct}
                </button>
                {card.incorrect.map(( answer, i) => (
                <button>
                  {answer}
                </button>
                ))} */}
                </div>
            </div>
          ) 
        )} 
     
      </div>
    )  
  }

export default CardQuestion