import React from 'react';
import './Header.css';
import Popup from '../Modal/Popup'


class Header extends React.Component {
    render() {
        let ranking = () => {
            if (this.props.tryes >= 21) {
                return '10%'
            } else if (this.props.tryes >= 11 && this.props.tryes <= 15) {
                return '20%'
            } else if (this.props.tryes >= 16 && this.props.tryes <= 20) {
                return '30%'
            } else {
                return '50%'
            } 
        }

        const descriptionText = `Felicitaciones! Tu puntuacion fue de ${this.props.tryes} intentos y tu descuento es de ${ranking()} , puedes utilizarlo pegando el código de descuento al hacer la reserva online desde nuestro sitio`;
       
        return(
            <header className="memory-header">
                <div className="title">
                     Juego de memoria
                </div>

                <div>
                {this.props.gameFinished
                    ?
                        <div>
                        {/* {` Resultado: ${ Math.round(10 / this.props.tryes * 10) }/ 10 puntos !`} */}
                        {/* <button className="winnerMemoryResult">{` Resultado: ${ Math.round(10 / this.props.tryes * 10) }/ 10 puntos !`} </button>*/}
                        <button className="winner-reinit-button" onClick={this.props.resetGame}>
                            INTÉNTALO OTRA VEZ
                        </button>
                        <button className="winner-reinit-button-iframe" onClick={this.props.resetGame}>{`${ Math.round(10 / this.props.tryes * 10) }/ 6 pts`} <br/>RESTART</button>
                        <Popup description={descriptionText} />
                        </div>

                    :  <div className="gameButtons">
                        <p className="memoryResult">Intentos: {this.props.tryes}</p>
                        <p className="reinit-button" onClick={this.props.resetGame}>
                            Reiniciar
                        </p>
                    </div>
                }
                </div>
            </header>
        )
    }
}

export default Header
