import React, {useEffect} from 'react';
import { Shuffle } from '../../../../Utils/common';
import { Context } from '../../../../Context/Provider';

const AnswersButton = ({ value, disabled, checkTheAnswer, correctAnswer, }) => {

    const [colorClass, setColorClass] = React.useState('orange');
    const { state, addScore, addClicks } =React.useContext(Context);
    
    
    const changeColor = (e) => {
        if (value === correctAnswer) {
            setColorClass('green')
            
            } else 
                setColorClass('red')
              
        }
     const onClick =(e) =>{
            addClicks(e)
            checkTheAnswer(e);
            changeColor(e);
     }

     

    
    return(
        <div>
                <button 
                    type="button"
                    className={`btnTrivia ${colorClass}`}
                    value={value}
                    disabled={disabled}
                    onClick={onClick}    
                >
                    {value}
                    </button>
        </div>
    )
}

export default AnswersButton