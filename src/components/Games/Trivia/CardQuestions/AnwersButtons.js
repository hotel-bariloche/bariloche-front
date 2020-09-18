import React, {useEffect} from 'react';
import { Shuffle } from '../../../../Utils/common';
import Button from 'react-bootstrap/Button'

const AnswersButton = ({ correct, incorrect }) => {

    const [colorClass, setColorClass] = React.useState('blue');
    const [click, setClick] = React.useState('false');
    const [index, setIndex] =React.useState(null)
    useEffect(() => {
        const shuffleAnswers = Shuffle(mixanswers)
      }, [])
    console.log(correct,incorrect)
    const mixanswers = []
        incorrect.map((answer) => (
        mixanswers.push(answer)
        ))
    mixanswers.push(correct)
    console.log(mixanswers)


    const checkTheAnswer = (e) => {
        // setClick('true')
    const correctAnswer = correct === e.target.value
    correctAnswer ? setColorClass('green') : setColorClass('red');
    console.log(e.target)
    }

    return(
        <div>
            {mixanswers.map((answer,i) => (

                <button 
                     type="button"
                    className={colorClass}
                    value={answer}
                    key={index}
                    onClick={(e) =>{checkTheAnswer(e)}}
                >
                    {answer}
                </button>
                ))
            }
        </div>
    )
}

export default AnswersButton