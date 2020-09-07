import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Context } from '../../../Context/Provider';
import ToolTipConditions from '../ToolTipConditions';
import './Popup.scss';

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
            <Modal isOpen={this.state.modal} toggle={this.toggle} style={{ marginTop:"10%"}}>
                <div className='bodyModalGeneral'>
                    <ModalHeader toggle={this.toggle}>
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
                        {/* <Button color="secondary" onClick={this.toggle}>{context().state.texts[language()].memoryGame.close_button}</Button> */}
                    </ModalFooter>
                 </div>
            </Modal>
        </div>
    )}
}

export default Popup;