import React from 'react';
import {
    Button, Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import './InstructionTrivia.scss';
import { Context } from '../../../Context/Provider';
import ToolTipConditions from '../ToolTipConditions';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export class InstructionMemory extends React.Component {      
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
       const instructions = <FontAwesomeIcon icon = {
           faQuestionCircle
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
        const close = <FontAwesomeIcon icon = {
            faTimes
          }
          />
      return (
        <div>
        {/* INSTRUCTIONS */}
            <span className="bigInstructions" style={{ color: "#746547", fontSize: "2em"}} onClick={this.toggle}>{instructions}</span>
            <Modal isOpen={this.state.modal} toggle={this.toggle} style={{ marginTop:"10%"}}>
                <div className ='all-modal-trivia'>
                    <ModalBody>
                        <div>
                        <span className="bigInstructionsClose" style={{ fontSize: "2em" }} onClick={this.toggle}>{close}</span>
                        </div>
                        <div className="triviaModalTitle">
                            {context().state.texts[language()].memoryGame.popupTitle}
                        </div>
                        <div className='triviaDespription'><p>                
                            {context().state.texts[language()].trivia.popup_description} 
                        </p></div>
                        <ul className='triviaListDiscount'>
                            <li>{context().state.texts[language()].trivia.instruction1}</li>
                            <li>{context().state.texts[language()].trivia.instruction2}</li>
                            <li>{context().state.texts[language()].trivia.instruction3}</li>
                            <li>{context().state.texts[language()].trivia.instruction4}</li>
                        </ul>
                    </ModalBody>
                    <ModalFooter>
                        <div>
                            <ToolTipConditions/>
                        </div>
                    </ModalFooter>
                </div>
            </Modal>
        </div>
    )}
}

export default InstructionMemory;