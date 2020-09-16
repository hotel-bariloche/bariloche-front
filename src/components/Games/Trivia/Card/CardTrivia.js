import React from 'react';
import Button from 'react-bootstrap/Button';
import Card  from 'react-bootstrap/Card';
import CardFront from '../CardFaces/CardFront';
import CardModal from './CardModal';
import ReactCardFlip from 'react-card-flip';
import Logo from '../../../img/Logo.png'





const CardInitial = () => {
    
    const [flip, setFlip] = React.useState(false);
    const [count, setCount] = React.useState(0);
    
    const Flipped=()=>{
        setFlip(!flip)
        setCount(count+1)
        }

        console.log(count)

    return(

    <div style={{ width: '25%'}} onClick={Flipped}>
        {flip===false && count===0 &&

        <div>
            <Card>
            <Card.Body>Suma</Card.Body>
            <Card.Title>100 puntos</Card.Title>
            </Card>
        </div>
         }
        {flip===true && count === 1 &&
            <CardModal count={count}/>
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
