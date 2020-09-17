import React from 'react';
import { Shuffle } from '../../../../Utils/common';
import Button from 'react-bootstrap/Button'

const AnswersButton = ({ correct, incorrect }) => {
    console.log(correct,incorrect)
    const mixanswers = []
        incorrect.map((answer) => (
        mixanswers.push(answer)
        ))
    mixanswers.push(correct)
    const shuffleAnswers = Shuffle(mixanswers)
    console.log(mixanswers)
    const checkTheAnswer = (e) => {
        const displayedAnswer = e.target.value;
        const correctAnswer = correct
        if (displayedAnswer === correctAnswer) {
          alert('corecto')
        } 
      }
    return(
        <div>
            {mixanswers.map((answer,i) => (
                <Button>
                    {answer}
                </Button>
                ))
            }
        </div>
    )
}

export default AnswersButton