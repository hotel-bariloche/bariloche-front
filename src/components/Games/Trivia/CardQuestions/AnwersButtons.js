import React, {useEffect} from 'react';
import { Shuffle } from '../../../../Utils/common';
import Button from 'react-bootstrap/Button';
import { Context } from '../../../../Context/Provider';

const AnswersButton = ({ correct, incorrect, points, handle }) => {

    const [colorClass, setColorClass] = React.useState('');
    const [disabled, setDisabled] = React.useState(false);
    const [shuffleAnswers, setShuffleAnswers] = React.useState([]);
    const { state, addScore, addClicks } =React.useContext(Context)
    console.log(state)


    console.log(correct,incorrect,points)
    const mixanswers = []
        incorrect.map((answer) => (
        mixanswers.push(answer)
        ))
    mixanswers.push(correct)

    useEffect(() => {
         setShuffleAnswers(Shuffle(mixanswers))
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
        
        if(disabled) {
            return;
        }
        setDisabled(true)

        
      }
    
      console.log(state.score)

    
    
    return(
        <div>
            {shuffleAnswers.map((answer,i) => (

                <button 
                     type="button"
                    className={`${colorClass}`}
                    value={answer}
                    key={i}
                    disabled={disabled}
                    onClick={(e) =>{checkTheAnswer(e); addClicks()}}
                >
                    {answer}
                </button>
                ))
            }
        </div>
    )
}

export default AnswersButton