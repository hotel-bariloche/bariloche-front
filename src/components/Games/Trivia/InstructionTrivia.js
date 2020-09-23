import React from 'react';
import {
    Button, Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import './InstructionTrivia.scss';
import { Context } from '../../../Context/Provider';
import ToolTipConditions from '../ToolTipConditions';

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

      return (
        <div>
        {/* INSTRUCTIONS */}
            <span className="bigInstructions" style={{ color: "#746547", fontSize: "2em"}} onClick={this.toggle}>{instructions}</span>
            <Modal isOpen={this.state.modal} toggle={this.toggle} style={{ marginTop:"10%"}}>
                <div className='bodyModalMemory'>
                    <ModalHeader toggle={this.toggle}>
                        <div className="memoryModalTitle">
                            {context().state.texts[language()].memoryGame.popupTitle}
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <div className='memoryDespription'><p>                
                            {context().state.texts[language()].trivia.popup_description} 
                        </p></div>
                        <ul className='memoryListDiscount'>
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
                        {/* <Button color="secondary" onClick={this.toggle}>{context().state.texts[language()].memoryGame.close_button}</Button> */}
                    </ModalFooter>
                 </div>
            </Modal>
        </div>
    )}
}

export default InstructionMemory;