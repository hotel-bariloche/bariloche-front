import React from 'react';
import CardBack from './CardBack'

const CardFront =()=>{
  const [flip, setFlip] = React.useState(false);
  const [count, setCount] = React.useState(0);

 const Flipped=()=>{
  setFlip(!flip)
  setCount(count+1)
  }

    return(
      <div>
      {flip===false && count===0 &&
        <div className= "back-card"
          onClick={Flipped}>
            <p>200</p>
            </div>
      }
          {flip===true && count === 1 &&
          <div className='card-open'
          onClick={Flipped}>  
          pregunta</div>
          }
          {count >=2 &&
          <div className='logo-card'
          onClick={Flipped}>  
          </div>
          }
        </div>

    )
  }
export default CardFront