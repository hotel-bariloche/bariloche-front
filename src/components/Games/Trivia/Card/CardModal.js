import React, { useState, useEffect } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import CardQuestion from '../CardQuestions/CardQuestion';
import { Context } from '../../../../Context/Provider';
import ChronoTrivia from './ChronoTrivia';


const CardModal = (props) => {

  const [modal, setModal] = useState(true);
  const [timerOn, setTimerOn] = useState(true);
  const { state, addClicks, addScore } = React.useContext(Context);

  const handleClose = (props) => {
    setModal(false);
}

React.useEffect(() => {
  if (timerOn === true){
       return
  }else {
      setTimerOn(false);
  } 
}, []);


  console.log(state.countClicks, 'holacliks')
    return(
        <div>
          <Modal className="modalQuestions" backdrop='static' isOpen={modal} toggle={handleClose} style={{ marginTop:"10%"}}>
            <ModalBody>
            <div className='question-head'>
            <p className="modalPoints">{props.points}</p>
            <div>            
            {timerOn === false ? (
              "00:00:00"
            ) : (
              <ChronoTrivia 
                  setTimerOn={setTimerOn} 
                  handle={handleClose}
                  timerOn={timerOn}
                  />
            )}
            </div>
            </div>
              <div>
                <CardQuestion 
                  question={props.question}
                  correct={props.correct} 
                  incorrect={props.incorrect}
                  points={props.points}
                  handle={handleClose}
                  id={props.id}
                />
              </div>
            </ModalBody>
          
          </Modal>
        </div>

    )
}

export default CardModal