import React, {useEffect} from 'react';
import { Shuffle } from '../../../../Utils/common';
import { Context } from '../../../../Context/Provider';

const AnswersButton = ({ value, disabled, checkTheAnswer, correctAnswer }) => {

    const [colorClass, setColorClass] = React.useState('');
    
    const changeColor = (e) => {
        if (value === correctAnswer) {
            setColorClass('green')
            } else 
                setColorClass('red')
        }
    
    return(
        <div>
                <button 
                    type="button"
                    className={`${colorClass}`}
                    value={value}
                    disabled={disabled}
                    onClick={(e) =>{
                        checkTheAnswer(e);
                        changeColor(e)
                        }}
                >
                    {value}
                    </button>
        </div>
    )
}

export default AnswersButton