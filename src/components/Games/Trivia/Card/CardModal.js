import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CardFront from '../CardFaces/CardFront';

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
            <CardFront/>
        </ModalBody>
        
        </Modal>
</div>

    )
}

export default CardModal