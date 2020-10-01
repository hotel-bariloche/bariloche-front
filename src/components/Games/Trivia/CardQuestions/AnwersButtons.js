import React, {useEffect} from 'react';
import { Shuffle } from '../../../../Utils/common';
import { Context } from '../../../../Context/Provider';

const AnswersButton = ({ value, disabled, checkTheAnswer, correctAnswer, }) => {

    const [colorClass, setColorClass] = React.useState('orange');
    const { state, addClicks } =React.useContext(Context);
    
    
    const changeColor = (e) => {
        if (value === correctAnswer) {
            setColorClass('green')
            } else 
            setColorClass('red')   
        }

useEffect(() => {
    if (colorClass === 'red') {
        addClicks()
    } else if (colorClass === 'green')
        addClicks()
}, [colorClass])

     const onClick =(e) =>{
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
                    onClick={(e) => onClick(e)}
                >
                    {value}
                    </button>
        </div>
    )
}

export default AnswersButton