import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Context } from '../../../Context/Provider';
import ToolTipConditions from '../ToolTipConditions';
import './Popup.scss';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

  export class Popup extends React.Component {      
    static contextType = Context
    constructor(props) {
        super(props);
        this.state = {
            modal: true
        }
    }

    toggle = () => this.setState({
            modal: !this.state.modal
        })
    
   
  render(){

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
        <div classNama='all-modal'>
        {/* INSTRUCTIONS */}
            <Modal isOpen={this.state.modal} toggle={this.toggle} style={{ marginTop:"10%"}}>
            <div className ={this.props.className1}>
                <div>
                    <span className="bigInstructionsClose" style={{ fontSize: "2em" }} onClick={this.toggle}>{close}</span>
                </div>    
                    <ModalHeader>
                        <div className={this.props.className}>
                            {context().state.texts[language()].memoryGame.popupTitle}
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <div className='generalDespription'><p> 
                         {this.props.description}
                        </p></div>
                        <ul className='generalListDiscount'>
                            <li>{this.props.instruction1}</li>
                            <li>{this.props.instruction2}</li>
                            <li>{this.props.instruction3}</li>
                            <li>{this.props.instruction4}</li>
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

export default Popup;