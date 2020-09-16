import React from 'react';
import CardBack from './CardBack';
import { Context } from '../../../../Context/Provider';
import AnswersButtons from './AnwersButtons'

const CardQuestion =()=>{

  // const [flip, setFlip] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const { state } = React.useContext(Context);

  // const checkTheAnswer = (e) => {
  //   const displayedAnswer = e.target.value;
  //   const correct = correctAnswer
  //   if (displayedAnswer === correct) {
  //     alert('corecto')
  //   } 
  // }

  // const Flipped=()=>{
  //   setFlip(!flip)
  //   setCount(count+1)
  //   }

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
                  <AnswersButtons correct={card.correct} incorrects={card.incorrect} />
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