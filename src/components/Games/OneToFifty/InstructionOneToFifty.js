import React from 'react';
import {
    Button, Modal, ModalBody, ModalFooter
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import './InstructionOneToFifty.scss';
import { Context } from '../../../Context/Provider';

export class InstructionOneToFifty extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
    }
    static contextType = Context

    toggle = () => this.setState({
            modal: !this.state.modal
        })
    
   
  render(){
    const context = this.context;
    const language = context.state.language;
       //Instructions Icon
       const instructions = <FontAwesomeIcon icon = {
           faQuestionCircle
       }
       />

      return (
        <div>
            {/* INSTRUCTIONS */}
                <span className="bigInstructions" style={{ color: "rgb(245, 123, 75)", fontSize: "2em"}} onClick={this.toggle}>{instructions}</span>
                <Modal isOpen={this.state.modal} toggle={this.toggle} style={{ marginTop:"10%"}}>
                    <ModalBody>
                    <div><p>
                    {context.state.texts[language].oneToFifty.popup_description} </p></div>
                        <ul>
                            <li>{context.state.texts[language].oneToFifty.instruction1} </li>
                            <li>{context.state.texts[language].oneToFifty.instruction2}</li>
                            <li>{context.state.texts[language].oneToFifty.instruction3} </li>
                            <li>{context.state.texts[language].oneToFifty.instruction4}</li>
                        </ul>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Cerrar</Button>
                    </ModalFooter>
                </Modal>
        </div>
    )}
}

export default InstructionOneToFifty;