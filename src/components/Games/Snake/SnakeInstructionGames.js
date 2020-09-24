import React from 'react';
import {
    Button, Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import './SnakeInstructionGames.scss'
import { Context } from '../../../Context/Provider';
import ToolTipConditions from '../ToolTipConditions';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


export class SnakeInstructionGames extends React.Component {
    static contextType = Context
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
    }

    toggle = () => this.setState({
            modal: !this.state.modal
        })
    
   
  render(){
       //Instructions Icon
       const instructions = < FontAwesomeIcon icon = {
           faQuestionCircle
       }
       />
       const close = <FontAwesomeIcon icon = {
        faTimes
      }
      />
       let context = () => {            
        const context = this.context;
        return context;
        }

        let language = () => {            
        const language = context().state.language;
        return language;
        } 
      return (
        <div className = "instructionGamesSnake" >
            {/* INSTRUCTIONS */}
            <span style={{ color: "#29ABE2", fontSize: "2em" }} onClick={this.toggle}>{instructions}</span>
            <Modal isOpen={this.state.modal} toggle={this.toggle} style={{ marginTop:"10%"}}>
            <div className ='all-modal-snake'>
                    <ModalBody>
                        <div>
                        <span className="bigInstructionsClose" style={{ fontSize: "2em" }} onClick={this.toggle}>{close}</span>
                         </div>
                        <div className="snakeModalTitle">
                            {context().state.texts[language()].memoryGame.popupTitle}
                        </div>
                        <div className='snakeDespription'><p>                
                            {context().state.texts[language()].snake.popup_description} 
                        </p></div>
                        <ul className='snakeListDiscount'>
                            <li>{context().state.texts[language()].snake.instruction1}</li>
                            <li>{context().state.texts[language()].snake.instruction2}</li>
                            <li>{context().state.texts[language()].snake.instruction3}</li>
                            <li>{context().state.texts[language()].snake.instruction4}</li>
                        </ul>
                    </ModalBody>
                    <ModalFooter>
                        <div>
                            <ToolTipConditions/>
                        </div>
                        {/* <Button color="secondary" onClick={this.toggle}>{context().state.texts[language()].memoryGame.close_button}</Button> */}
                    </ModalFooter>
                 </div>
            </Modal>
        </div>
    )}
}

export default SnakeInstructionGames;