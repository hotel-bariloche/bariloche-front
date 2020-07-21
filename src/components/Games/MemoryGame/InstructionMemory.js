import React from 'react';
import {
    Button, Modal, ModalBody, ModalFooter
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import './InstructionMemory.scss';

export class InstructionMemory extends React.Component {
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
                <span className="bigInstructions" style={{ color: "#cca772", fontSize: "2em"}} onClick={this.toggle}>{instructions}</span>
                <span className="smallInstructions" style={{ color: "#A2A2A2", fontSize: "1.5em"}} onClick={this.toggle}>{instructions}</span>
                <Modal isOpen={this.state.modal} toggle={this.toggle} style={{ marginTop:"10%"}}>
                    <ModalBody>
                        <div><p>
                        Encuentra las parejas de cartas iguales.En cuanto menos intentos lo logres, más puntos acumularás </p></div>
                        <ul>
                            <li>10 intentos: 50% de descuento </li>
                            <li>11 a 15 intentos: 30% de descuento </li>
                            <li>16 a 20 intentos: 20% de descuento </li>
                            <li>21 intentos o más: 10% de descuento</li>
                        </ul>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Cerrar</Button>
                    </ModalFooter>
                </Modal>
        </div>
    )}
}

export default InstructionMemory;