import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './Popup.scss';

const Popup = (props) => {
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
            <h3 className="popup-title">{props.description}</h3>      
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
  
export default Popup