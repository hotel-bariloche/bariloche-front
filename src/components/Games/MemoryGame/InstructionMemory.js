import React from 'react';
import {
    Button, Modal, ModalBody, ModalFooter
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import './InstructionMemory.scss';
import { Context } from '../../../Context/Provider';

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
            <span className="bigInstructions" style={{ color: "#cca772", fontSize: "2em"}} onClick={this.toggle}>{instructions}</span>
            <span className="smallInstructions" style={{ color: "#A2A2A2", fontSize: "1.5em"}} onClick={this.toggle}>{instructions}</span>
            <Modal isOpen={this.state.modal} toggle={this.toggle} style={{ marginTop:"10%"}}>
                <ModalBody>
                    <div><p>                
                    {context().state.texts[language()].memoryGame.popup_description} 
                    </p></div>
                    <ul>
                        <li>{context().state.texts[language()].memoryGame.instruction1}</li>
                        <li>{context().state.texts[language()].memoryGame.instruction2}</li>
                        <li>{context().state.texts[language()].memoryGame.instruction3}</li>
                        <li>{context().state.texts[language()].memoryGame.instruction4}</li>
                    </ul>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={this.toggle}>{context().state.texts[language()].memoryGame.close_button}</Button>
                </ModalFooter>
            </Modal>
        </div>
    )}
}

export default InstructionMemory;