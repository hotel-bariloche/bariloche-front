import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Video = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
      <div>
          <section id="video">
          <iframe 
                  width="100%" height="700" src="https://www.youtube.com/embed/WU_dWnyGZSo?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
          </iframe>
          </section>

         {/* <Modal  size="lg" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <iframe 
                  width="760" height="400" src="https://www.youtube.com/embed/WU_dWnyGZSo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
              </iframe>
          </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>*/} 
        </div>
    )
}

export default Video

/*<iframe width="560" height="315" src="https://www.youtube.com/watch?v=WU_dWnyGZSo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>*/