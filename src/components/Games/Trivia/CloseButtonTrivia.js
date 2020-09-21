import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './CloseButtonTrivia.scss';

class CloseButtonTrivia extends React.Component {
  render(){
       //Button Icon
       const closeButton = < FontAwesomeIcon icon = {
           faTimesCircle
       }
       />
      return (
        <div>
            {/* CLOSE BUTTON */}
            <div className="bigCloseButtonMemory">
               <Link to = "/games" ><span style={{color: "#29ABE2", fontSize: "2em"}}>{closeButton}</span></Link> 
            </div>            
        </div>
    )}
}
export default CloseButtonTrivia;