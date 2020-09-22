import React, { useContext, useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Context } from '../../../Context/Provider';
import ToolTipConditions from '../ToolTipConditions';
import './Popup.scss';

  export const Popup = ( props ) => {      
    const context = useContext(Context);  
    const { state: { language }} = context;
    const [modal, setModal] = useState(false);

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
        <div>
        {/* INSTRUCTIONS */}
            <Modal isOpen={modal && props.show} toggle={toggle} style={{ marginTop:"10%"}}>
                <div className='bodyModalGeneral'>
                    <ModalHeader toggle={toggle}>
                        <div className={props.className}>
                            {context.state.texts[language].memoryGame.popupTitle}
                        </div>
                    </ModalHeader>
                    <ModalBody>
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