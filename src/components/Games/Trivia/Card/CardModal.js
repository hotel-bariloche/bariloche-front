import React, { useState, useEffect } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import CardQuestion from '../CardQuestions/CardQuestion';
import { Context } from '../../../../Context/Provider';


const CardModal = (props) => {

  const [modal, setModal] = useState(true);
  const [timer, setTimer] = useState(10);
  const { state, addClicks, addScore } =React.useContext(Context);

  const handleClose = (props) => {
    setModal(false);
}

let timerVar

useEffect(() => {
    if (timer > 0) {
      timerVar = setTimeout(() => setTimer(timer - 1), 1000);
      
    } else {
      setModal(handleClose());
      addClicks()
      clearTimeout(timerVar)
    }
  }, [timer]);

  console.log(state.countClicks)
    return(
        <div>
          <Modal backdrop='static' isOpen={modal} toggle={handleClose} style={{ marginTop:"10%"}}>
            <ModalBody>
            <div>{timer}</div>
                <CardQuestion 
                  question={props.question}
                  correct={props.correct} 
                  incorrect={props.incorrect}
                  points={props.points}
                  handle={handleClose}
                  id={props.id}
                />
            </ModalBody>
          
          </Modal>
        </div>

    )
}

export default CardModal