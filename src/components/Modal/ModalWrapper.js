import React from 'react';
import Modal from 'react-bootstrap/Modal';

const ModalWrapper = ({children, show = false, handleClose}) => {
    return (
      <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered={true}
          size="xl"
        >
        <Modal.Header closeButton/>                  
          <Modal.Body>
            {children}
          </Modal.Body>
        </Modal>
      </>
    );
  }
  
export default ModalWrapper