// import React, { useState, useEffect } from 'react';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import './Popup.scss';
// import { Context } from '../../../Context/Provider';

// const Popup = (props) => {
//     const { state } = React.useContext(Context);

//     const [show, setShow] = useState(true);
  
//     const handleClose = () => setShow(false);
  
//     return (
//       <>
//         <Modal
//           show={show}
//           onHide={handleClose}
//           backdrop="static"
//           keyboard={false}
//           centered={true}
//           size="xl"
//           className="popup-container"
//         >
//           <Modal.Body className="popup-content">
//             <h4 className="popup-title">{props.description}</h4>     
//             <Button variant="secondary" onClick={handleClose} className="popup-button">
//               {state.texts[state.language].memoryGame.close_button}
//             </Button> 
//           </Modal.Body>
//         </Modal>
//       </>
//     );
//   }
  
// export default Popup
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Context } from '../../../Context/Provider';
import ToolTipConditions from '../ToolTipConditions';

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
            {/* <span className="bigInstructions" style={{ color: "#29ABE2", fontSize: "2em"}} onClick={this.toggle}>{instructions}</span> */}
            <Modal isOpen={this.state.modal} toggle={this.toggle} style={{ marginTop:"10%"}}>
                <div className='bodyModalMemory'>
                    <ModalHeader toggle={this.toggle}>
                        <div className="memoryModalTitle">
                            {context().state.texts[language()].memoryGame.popupTitle}
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <div className='memoryDespription'><p> 
                         {this.props.description}
                        </p></div>
                        <ul className='memoryListDiscount'>
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