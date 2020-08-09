import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Context } from '../../../Context/Provider';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ModalGame = (props) => {  

  const { state } = React.useContext(Context);
  const [modal, setModal] = useState(true);
  const [score, setScore] = useState(0);

  let time = (props.actualTime);
  let timeSplit = time.split(':');
  let minutos = (timeSplit[0])
  let segundos = (timeSplit[1])
  let timeInSeconds = (Number(minutos) * 60) + Number(segundos);

  const toggle = () => setModal(!modal);

  let ranking = () => {
    if (timeInSeconds >= 50) {
      return `10% ${score} `
    } else if (timeInSeconds >= 40) {
      return `20% ${score} `
    } else if (timeInSeconds >= 30) {
      return `30% ${score} `
    } else {
      return `50% ${score} `
    } 
  }

  return (
    <div>
      <Modal isOpen={modal} style={{ marginTop: '20vh' }}>
        <ModalHeader >{ranking()}</ModalHeader>
        <ModalBody>
          <Row xs={1}>
            <Col>
              <p>{state.texts[state.language].memoryGame.congrats_msg1} {ranking()}{state.texts[state.language].memoryGame.congrats_msg2}{state.texts[state.language].memoryGame.congrats_msg3}<span style={{ fontWeight: "bold", fontSize: "x-large" }}>{props.actualTime}</span></p>
            </Col>
          </Row>
          <Row xs={1}>
          <Col>
            <p>{state.texts[state.language].memoryGame.conditions}</p>
          </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
        <a className="button" target="_blank" href="https://reservations.travelclick.com/106660?languageid=2%20#/guestsandrooms">{state.texts[state.language].home.book}</a>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalGame;
