import React, { useContext, useEffect, useState } from 'react';
import {  Modal, ModalBody, ModalFooter } from 'reactstrap';
import { Context } from '../../../Context/Provider';
import ToolTipConditions from '../ToolTipConditions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Popup.scss';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

  export const Popup = ( props ) => {      
    const context = useContext(Context);  
    const { state: { language }} = context;
    const [modal, setModal] = useState(true);

    const close = <FontAwesomeIcon icon = {
        faTimes
      }
       />

    const toggle = () => {
        setModal(!modal)
        if(props.setShow)
            props.setShow(!modal)
    }

    useEffect(() => {
        if(props.show)
            toggle()
    }, [props.show])


      return (
        <div classNama='all-modal'>
        {/* INSTRUCTIONS */}
            <Modal isOpen={modal} toggle={toggle} style={{ marginTop:"10%"}}>
            <div className ={props.className1}>
                    <ModalBody>
                        <div>
                        <span className="bigInstructionsClose" style={{ fontSize: "2em" }} onClick={toggle}>{close}</span>
                        </div>
                        <div className={props.className}>
                            {context.state.texts[language].memoryGame.popupTitle}
                        </div>
                        <div className='generalDespription'><p> 
                         {props.description}
                        </p></div>
                        <ul className='generalListDiscount'>
                            <li>{props.instruction1}</li>
                            <li>{props.instruction2}</li>
                            <li>{props.instruction3}</li>
                            <li>{props.instruction4}</li>
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
    )
}

export default Popup;