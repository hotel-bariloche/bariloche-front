import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Context } from '../../../Context/Provider';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './finalPopup.scss';

const FinalPopup = (props) => {
    const [show, setShow] = useState(true);
    const [score, setScore] = useState(0);
    const handleClose = () => setShow(false);
    const { state } = React.useContext(Context);

    let points = (props.points);

    let ranking = () => {
      if (points >= 1 || points <= 5) {
        return `10%`
      } else if (points >= 10) {
        return `20%`
      } else if (points >= 15) {
        return `25%`
      } else {
        return `30%`
      } 
  
    }
  
  
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
          <Modal.Body>
            <Row xs={1}>
              <Col>
                <p className="modal-snake">{state.texts[state.language].memoryGame.congrats_msg1}{ranking()} {state.texts[state.language].memoryGame.congrats_msg2}{state.texts[state.language].memoryGame.congrats_msg3}<span style={{ fontWeight: "bold", fontSize: "x-large" }}>{props.actualTime}</span></p>
              </Col>
            </Row>
            <Row xs={1}>
            <Col>
              <p>{state.texts[state.language].memoryGame.conditions}</p>
            </Col>
            </Row>
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