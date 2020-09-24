import React from 'react';
import {
         Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import './InstructionMemory.scss';
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
        <div>
        {/* INSTRUCTIONS */}
            <span className="bigInstructions" style={{ color: "#29ABE2", fontSize: "2em"}} onClick={this.toggle}>{instructions}</span>
            <Modal  isOpen={this.state.modal} toggle={this.toggle} style={{ 
                marginTop:"10%",
                }}>
                <div className ='all-modal-memory'>
                <div>
                    <span className="bigInstructionsClose" style={{ fontSize: "2em" }} onClick={this.toggle}>{close}</span>
                </div>
                    <ModalHeader>
                        <div className="memoryModalTitle1">
                            {context().state.texts[language()].memoryGame.popupTitle}
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <div className='memoryDespription1'><p>                
                            {context().state.texts[language()].memoryGame.popup_description} 
                        </p></div>
                        <ul className='memoryListDiscount1'>
                            <li>{context().state.texts[language()].memoryGame.instruction1}</li>
                            <li>{context().state.texts[language()].memoryGame.instruction2}</li>
                            <li>{context().state.texts[language()].memoryGame.instruction3}</li>
                            <li>{context().state.texts[language()].memoryGame.instruction4}</li>
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