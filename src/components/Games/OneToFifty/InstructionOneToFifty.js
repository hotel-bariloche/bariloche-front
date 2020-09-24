import React from 'react';
import {
    Button, Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import './InstructionOneToFifty.scss';
import { Context } from '../../../Context/Provider';
import ToolTipConditions from '../ToolTipConditions';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

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
        const close = <FontAwesomeIcon icon = {
            faTimes
        }
        />

      return (
        <div>
            {/* INSTRUCTIONS */}
            <span className="bigInstructionsOne" style={{ color: "#E5423A", fontSize: "2em"}} onClick={this.toggle}>{instructions}</span>
            <Modal isOpen={this.state.modal} toggle={this.toggle} style={{ marginTop:"10%"}}>
                <div className ='all-modal-fifty'>
                    <ModalBody>
                        <div>
                            <span className="bigInstructionsClose" style={{ fontSize: "2em" }} onClick={this.toggle}>{close}</span>
                        </div>
                        <div className="oneToFiftyModalTitle">
                            {context.state.texts[language].memoryGame.popupTitle}
                        </div>
                        <div className='oneToFiftyDespription'><p>                
                            {context.state.texts[language].oneToFifty.popup_description} 
                        </p></div>
                        <ul className='oneToFiftyListDiscount'>
                            <li>{context.state.texts[language].oneToFifty.instruction1}</li>
                            <li>{context.state.texts[language].oneToFifty.instruction2}</li>
                            <li>{context.state.texts[language].oneToFifty.instruction3}</li>
                            <li>{context.state.texts[language].oneToFifty.instruction4}</li>
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

export default InstructionOneToFifty;