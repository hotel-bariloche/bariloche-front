import React from 'react';
import {
    Button, Modal, ModalBody, ModalFooter
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import './InstructionOneToFifty.scss';

export class InstructionOneToFifty extends React.Component {
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

      return (
        <div>
            {/* INSTRUCTIONS */}
                <span className="bigInstructions" style={{ color: "rgb(245, 123, 75)", fontSize: "2em"}} onClick={this.toggle}>{instructions}</span>
                <Modal isOpen={this.state.modal} toggle={this.toggle} style={{ marginTop:"10%"}}>
                    <ModalBody>
                    <div><p>
                    Se va el autobus y quedan dormidos todos los pasajeros. Despertalos en orden de habitación del 1 al 48 en tiempo record para conseguir descuentos en tu reserva!. </p></div>
                        <ul>
                            <li>De 0 a 30 segundos: 50% de descuento </li>
                            <li>De 30 a 40 segundos: 30% de descuento </li>
                            <li>De 40 a 50 segundos: 20% de descuento </li>
                            <li>En 50 segundos o más: 10% de descuento</li>
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