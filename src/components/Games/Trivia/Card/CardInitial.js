import React from 'react';
import Card  from 'react-bootstrap/Card';
import CardModal from './CardModal';
import Logo from '../../../img/Logo.png'





const CardInitial = (props) => {
    
    const [flip, setFlip] = React.useState(false);
    const [count, setCount] = React.useState(0);
    
    const Flipped=()=>{
        setFlip(!flip)
        setCount(count+1)
        }

        console.log(count)
        console.log(props)

    return(

    <div onClick={Flipped}>
        {flip===false && count===0 &&

        <div>
            <Card>
            <Card.Body>Suma</Card.Body>
            <Card.Title>{props.points}</Card.Title>
            </Card>
        </div>
         }
        {flip===true && count === 1 &&
            <CardModal count={count} 
            question={props.question}
            correct={props.correct} 
            incorrect={props.incorrect}
            points={props.points}
            />
        }
        {flip===true && count >=1 &&
        <Card onClick={Flipped}>
            <Card.Img style={{ backgroundColor: 'rgb(204, 167, 114)'}}src={Logo}/>
        </Card>
         
        }
    

    </div>

    )
}

export default CardInitial
