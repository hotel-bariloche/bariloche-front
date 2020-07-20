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
          <p>Felicitaciones! Tu tiempo fue &nbsp; &nbsp;  y tu descuento es de {ranking()}. puedes utilizarlo pegando el código de descuento al hacer la reserva online desde nuestro sitio<span style={{ fontWeight: "bold", fontSize: "x-large" }}>{props.actualTime}</span></p>
        </ModalBody>
        <ModalFooter>
            <Button color="primary" onClick={()=> setModal(!modal)}>Cerrar</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalGame;
