import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './CloseButtonOneToFifty.scss';
class CloseButtonOneToFifty extends React.Component {
  render(){
       //Button Icon
       const closeButton = < FontAwesomeIcon icon = {
           faTimesCircle
       }
       />
      return (
        <div>
            {/* CLOSE BUTTON */}
            <div className="bigCloseButtonOne">
               <Link to = "/games" ><span style={{color: "#E5423A", fontSize: "2em"}}>{closeButton}</span></Link> 
            </div>
        </div>
    )}
}
export default CloseButtonOneToFifty;