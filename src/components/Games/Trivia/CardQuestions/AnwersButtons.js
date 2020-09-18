import React, {useEffect} from 'react';
import { Shuffle } from '../../../../Utils/common';
import Button from 'react-bootstrap/Button';
import { Context } from '../../../../Context/Provider';

const AnswersButton = ({ correct, incorrect, points }) => {

    const [colorClass, setColorClass] = React.useState('');
    const [click, setClick] = React.useState(false);
    const [point, setPoint] = React.useState(points);
    const { state, addScore } =React.useContext(Context)


    console.log(correct,incorrect,points)
    const mixanswers = []
        incorrect.map((answer) => (
        mixanswers.push(answer)
        ))
    mixanswers.push(correct)

    useEffect(() => {
        const shuffleAnswers = Shuffle(mixanswers)
    }, [])

    const checkTheAnswer = (e) => {
        
        const displayedAnswer = e.target.value;
        const correctAnswer = correct
        if (displayedAnswer === correctAnswer) {
            addScore(points)
            setColorClass('green')

        } else if (displayedAnswer !== correctAnswer) {
            setColorClass('red')
        }
        e.preventDefault()
      }
console.log(state.score)
    return(
        <div>
            {mixanswers.map((answer,i) => (

                <button 
                     type="button"
                    className={`${colorClass}`}
                    value={answer}
                    key={i}
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