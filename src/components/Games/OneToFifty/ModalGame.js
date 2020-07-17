import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalGame = (props) => {  


  const [modal, setModal] = useState(true);
  const [score, setScore] = useState(0);

  let time = (props.actualTime);
  let timeSplit = time.split(':');
  let minutos = (timeSplit[0])
  let segundos = (timeSplit[1])
  let timeInSeconds = (Number(minutos) * 60) + Number(segundos);

  const toggle = () => setModal(!modal);

  let ranking = () => {
    if (timeInSeconds >= 100) {
      return `Vete a por un cafe y vuelve...${score} PTS`
    } else if (timeInSeconds >= 60) {
      return `¡¡Normalillo!!...${score} PTS`
    } else if (timeInSeconds >= 50) {
      return `¡Por encima de la media!...${score} PTS`
    } else if (timeInSeconds >= 40) {
      return `Nivel Experto...${score} PTS`
    } else {
      return `Nivel DIOS...${score} PTS`
    }
  }

  return (
    <div>
      <Modal isOpen={modal} style={{ marginTop: '20vh' }}>
        <ModalHeader >{ranking()}</ModalHeader>
        <ModalBody>
          <p>Tu tiempo es de &nbsp; &nbsp;<span style={{ fontWeight: "bold", fontSize: "x-large" }}>{props.actualTime}</span></p>
        </ModalBody>
        <ModalFooter>
            <Button color="primary" onClick={()=> setModal(!modal)}>Cerrar</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalGame;
