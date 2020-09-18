import React, {useEffect} from 'react';
import { Shuffle } from '../../../../Utils/common';
import Button from 'react-bootstrap/Button';
import { Context } from '../../../../Context/Provider';

const AnswersButton = ({ correct, incorrect, points }) => {
    // const [point, setPoint] = React.useState(points);
    console.log(points)
    const { state, addScore } = React.useContext(Context);
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


    const checkTheAnswer = (e) => {
        // setClick('true')
    const correctAnswer = correct === e.target.value
    correctAnswer ? setColorClass('green') : setColorClass('red');
    // addScore(points)
   
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