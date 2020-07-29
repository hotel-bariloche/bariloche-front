import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Context } from '../../../Context/Provider';

import './finalPopup.scss';

const FinalPopup = (props) => {
    const [show, setShow] = useState(true);
  
    const handleClose = () => setShow(false);

    const { state } = React.useContext(Context);

  
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
            <h3 className="popup-title">{props.title}</h3>
            <h1 className="popup-title">{props.points}</h1>
            <h4 className="popup-title">{props.description}</h4>      
            <h2 className="popup-title">{props.code}</h2>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose} className="popup-button">
            {state.texts[state.language].snake.button_close}
            </Button>
            <Button variant="secondary" href="https://reservations.travelclick.com/106660?languageid=2%20#/guestsandrooms" className="popup-button">
             {state.texts[state.language].snake.button_book}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default FinalPopup