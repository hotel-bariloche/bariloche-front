import React, { useEffect } from 'react';
import { Shuffle } from '../../../../Utils/common';
import Button from 'react-bootstrap/Button'

const AnswersButton = ({ correct, incorrect, points, score }) => {

    const [colorClass, setColorClass] = React.useState('');
    const [click, setClick] = React.useState(false);
    const [point, setPoint] = React.useState(points);
    const [result, setResult] = React.useState(score)


    console.log(correct,incorrect)
    const mixanswers = []
        incorrect.map((answer) => (
        mixanswers.push(answer)
        ))
    mixanswers.push(correct)

    useEffect(() => {
        const shuffleAnswers = Shuffle(mixanswers)
    }, [])

    
    console.log(mixanswers)

    const checkTheAnswer = (e) => {
        
        const displayedAnswer = e.target.value;
        const correctAnswer = correct
        if (displayedAnswer === correctAnswer) {
            setPoint(points)
            setColorClass('green')
            setResult(point + result)

        } else if (displayedAnswer !== correctAnswer) {
            setColorClass('red')
        }
        e.preventDefault()
      }

      console.log(colorClass)
      console.log(score)
      console.log(result)
    

    return(
        <div>
            {mixanswers.map((answer,i) => (
                <Button 
                    className={`${colorClass}`}
                    value={answer}
                    onClick={(e) =>{checkTheAnswer(e)}}
                >
                    {answer}
                </Button>
                ))
            }
        </div>
    )
}

export default AnswersButton