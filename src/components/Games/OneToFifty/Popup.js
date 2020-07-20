import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './Popup.scss';

const Popup = () => {
    const [show, setShow] = useState(true);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
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
            <h3 className="popup-title">Se va el autobus y se quedan dormidos todos los pasajeros. Despertalos en orden de habitación del 1 al 48 en tiempo record para conseguir descuentos en tu reserva!.</h3>
         
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