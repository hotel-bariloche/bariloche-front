import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './finalPopup.scss';

const FinalPopup = (props) => {
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
            <h3 className="popup-title">{props.title}</h3>
            <h5 className="popup-title">{props.points}</h5>
            <p className="popup-title">{props.code}</p>
            <p className="popup-title">{props.description}</p>      
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose} className="popup-button">
              Entendido
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default FinalPopup