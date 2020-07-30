import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './Popup.scss';
import { Context } from '../../../Context/Provider';

const Popup = (props) => {
    const { state } = React.useContext(Context);

    const [show, setShow] = useState(true);
  
    const handleClose = () => setShow(false);
  
    return (
      <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered={true}
          size="xl"
          className="popup-container"
        >
          <Modal.Body className="popup-content">
            <h4 className="popup-title">{props.description}</h4>     
            <Button variant="secondary" onClick={handleClose} className="popup-button">
              {state.texts[state.language].memoryGame.close_button}
            </Button> 
          </Modal.Body>
        </Modal>
      </>
    );
  }
  
export default Popup