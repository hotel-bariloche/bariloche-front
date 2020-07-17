import React, { useState } from 'react';
import shortId from 'shortid';
import {
    Button, Modal, ModalBody
} from 'reactstrap';
import './Ranking.css';

const Ranking=({gameName, scoreState})=>{
    const [ranking, setRanking]= useState()
    const [modal, setModal] = useState(true);
    const [closeAll, setCloseAll] = useState(true);

    const backgroundColors = ['#CCA43D', '#C0C0C0', '#7F3F00']
    const toggle = () => setModal(!modal);
    const fontSize = 30;
    return(
        <div className="modal">
             <Modal isOpen={modal} toggle={toggle} >
                 <ModalBody style={{ textAlign: 'center'}}>
                 <Button color="primary" onClick={toggle}>Close</Button>
                 <h2>Ganadores</h2>
                        {ranking &&
                        <div style={{color:'black', zIndex:1000, align: 'center'}}>

                            <table style={{display: 'flex',  justifyContent:'space-evenly'}}>
                            {ranking.map((score, index)=>{
                                return(
                                    <div style={{backgroundColor: backgroundColors[index], padding: '10px;', width:'100px', height:'100px'}}>
                                        <div key={shortId.generate()}>
                                        {/* <h4>{index + 1}</h4> */}
                                        <h5>{score.name}</h5>
                                        <h4>{Object.values(score)[1]}</h4></div>
                                    </div>
                                )
                            })}
                            </table>
                        </div>}
                    </ModalBody>
             </Modal>
        </div>
    )
}
export default Ranking;
