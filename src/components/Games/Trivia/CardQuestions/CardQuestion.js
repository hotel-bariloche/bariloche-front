import React from 'react';
import AnswersButtons from './AnwersButtons';
import { Shuffle } from '../../../../Utils/common';
import { Context } from '../../../../Context/Provider';

const CardQuestion = (props) => {

  const [disabled, setDisabled] = React.useState(false);
  const [shuffleAnswers, setShuffleAnswers] = React.useState([]);
  const { state, addScore, addClicks } =React.useContext(Context);


  const mixanswers = []
      props.incorrect.map((answer) => (
      mixanswers.push(answer)
      ))
  mixanswers.push(props.correct)

  React.useEffect(() => {
       setShuffleAnswers(Shuffle(mixanswers))
       
  }, [])

  const checkTheAnswer = (e) => {
      const displayedAnswer = e.target.value;
      const correctAnswer = props.correct
          if (displayedAnswer === correctAnswer) {
              addScore(props.points)
          }
          if(disabled) {
              return;
          }
          setDisabled(true)

          setTimeout(() => {
              props.handle()
          }, 1500);

  }

 
   console.log(state.score, 'holiscore')

    return(
      <div>
          <p>{props.question}</p>
          {shuffleAnswers.map((answer,i) => (
                <AnswersButtons
                checkTheAnswer={checkTheAnswer}
                value={answer}
                correctAnswer={props.correct}
                disabled={disabled}
                index={i}
                clicks={addClicks}
                />
                ))
            }
      </div>
   
    )  
  }

export default CardQuestion