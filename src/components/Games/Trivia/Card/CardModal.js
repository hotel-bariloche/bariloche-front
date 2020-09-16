import React, { useState } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import CardQuestion from '../CardQuestions/CardQuestion';

const CardModal = (props) => {

  const [modal, setModal] = useState(true);
  let [count, setCount] = useState(props.count);
  const [show, setShow] = useState(true);

  const handleClose = (props) => {
      setShow(false);
      setModal(false);
      setCount(count + 1)
  }
  
    return(
        <div>
          <Modal isOpen={modal} toggle={handleClose} style={{ marginTop:"10%"}}>
          <span style={{ fontSize: "2em"}} onClick={handleClose}>X</span>
            <ModalBody>
                <CardQuestion 
                  question={props.question}
                  correct={props.correct} 
                  incorrect={props.incorrect}
                />
            </ModalBody>
          
          </Modal>
        </div>

    )
}

export default CardModal