import React from 'react';
import './Trivia.css';
import CardQuestion from './CardFaces/CardQuestion';
import CardInitial from './Card/CardTrivia';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Row';


const Trivia =()=>{
    return(
        <div className="trivial-grid">
            <Row bsPrefix="card-row">
                <CardInitial />
                <CardInitial />
                <CardInitial />
                <CardInitial />              
            </Row>

        </div>
    )
}
export default Trivia