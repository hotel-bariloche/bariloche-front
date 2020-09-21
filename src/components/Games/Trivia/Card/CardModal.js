import React, { useState, useEffect } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import CardQuestion from '../CardQuestions/CardQuestion';



const CardModal = (props) => {

  const [modal, setModal] = useState(true);
  const [timer, setTimer] = useState(10);

  const handleClose = (props) => {
    setModal(false);
}
useEffect(() => {
    if (timer > 0) {
      setTimeout(() => setTimer(timer - 1), 1000);
    } else {
      setModal(handleClose());
    }
  }, [timer]);

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
                />
            </ModalBody>
          
          </Modal>
        </div>

    )
}

export default CardModal