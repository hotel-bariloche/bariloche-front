import React from 'react';
import './Header.scss';
import Popup from '../Modal/Popup'
import MemoryFinalPopup from './MemoryFinalPopUp'
import InstructionMemory from './InstructionMemory';
import CloseButtonMemory from './CloseButtonMemory';
import { Context } from '../../../Context/Provider';
import memoryTestTitleEs from "../../img/games/memoryTestTitle-es_10.png";
import memoryTestTitleEn from "../../img/games/memoryTestTitle-en_10.png";

class Header extends React.Component {        
    static contextType = Context
    render() {
        const ranking = () => {
            if (this.props.tryes >= 21) {
                return '10%'
            } else if (this.props.tryes >= 16 && this.props.tryes <= 20) {
                return '20%'
            } else if (this.props.tryes >= 11 && this.props.tryes <= 15) {
                return '30%'
            } else if (this.props.tryes == 10) {
                return '50%'
            } else {
                return '0%'
            }
        }

        const context = () => {            
            const context = this.context;
            return context;
        }

        const language = () => {            
            const language = context().state.language;
            return language;
        }

        const descriptionText = `${context().state.texts[language()].memoryGame.congrats_msg1} ${this.props.tryes} ${context().state.texts[language()].memoryGame.congrats_msg2} ${ranking()} ${context().state.texts[language()].memoryGame.congrats_msg3}`;
        


        return(
            <React.Fragment>
            <header className="memory-header">
                <img src={language() === 'spanish' ? memoryTestTitleEs : memoryTestTitleEn} />    
                <div className="memory-header-buttons">
                    <InstructionMemory />
                    <CloseButtonMemory />              
                </div>            
            </header>
                <div>
                {this.props.gameFinished
                    ?
                        <div>
                        {/* {` Resultado: ${ Math.round(10 / this.props.tryes * 10) }/ 10 puntos !`} */}
                        {/* <button className="winnerMemoryResult">{` Resultado: ${ Math.round(10 / this.props.tryes * 10) }/ 10 puntos !`} </button>*/}
                        <button className="winner-reinit-button" onClick={this.props.resetGame}>              
                          {context().state.texts[language()].memoryGame.try_again} 
                        </button>
                        <button className="winner-reinit-button-iframe" onClick={this.props.resetGame}>{`${ Math.round(10 / this.props.tryes * 10) }/ 6 pts`} <br/> {context().state.texts[language()].memoryGame.reset} </button>
                        <MemoryFinalPopup description={descriptionText} tryes={this.props.tryes} />
                        </div>

                    :  <div className="gameButtons">
                        <p className="memoryResult">{context().state.texts[language()].memoryGame.counter} : {this.props.tryes}</p>
                        <p className="reinit-button" onClick={this.props.resetGame}>
                             {context().state.texts[language()].memoryGame.reset}
                        </p>
                    </div>
                }
                </div>
                </React.Fragment>
        )
    }
}

export default Header

