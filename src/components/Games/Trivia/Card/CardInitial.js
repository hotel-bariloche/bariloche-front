import React from 'react';
import Card  from 'react-bootstrap/Card';
import CardModal from './CardModal';
import Logo from '../../../img/Logo.png';
import { Context } from '../../../../Context/Provider';



const CardInitial = (props) => {
    
    const [flip, setFlip] = React.useState(false);
    const [count, setCount] = React.useState(0);
    const { state } =React.useContext(Context);


    

    
    const Flipped=()=>{
        setFlip(!flip)
        setCount(count+1)
     }


    return(

    <div onClick={Flipped}>
        {flip===false && count===0 &&

        <div>
            <Card className="cardBody">
            <Card.Title className="cardTitle">{props.points}</Card.Title>
            <button className="cardInitialButton" onClick={Flipped}>{state.texts[state.language].trivia.buttonQuestion}</button>
            </Card>
        </div>
         }
        {flip===true && count === 1 &&
            <CardModal count={count} 
            question={props.question}
            correct={props.correct} 
            incorrect={props.incorrect}
            points={props.points}
            id={props.id}
            />
        }
        {count >=1 &&
            <Card disabled={true} onClick={Flipped}>
                <Card.Img style={{ backgroundColor: 'rgb(204, 167, 114)', height: '140px', width: '150px', padding: '30px'}}src={Logo}/>
            </Card>
         
        }

    </div>

    )
}

export default CardInitial
