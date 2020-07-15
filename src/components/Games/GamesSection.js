import React from 'react';
import {Link} from 'react-router-dom';
import { Context } from '../../Context/Provider';

const GamesSection = () => {
    const { state } = React.useContext(Context);
    return(
        <div className="gameSectionContainer">
                <div>
                    <div className="headerText">
                    <h2>Jugá, divertite, y ganá descuentos increíbles para tu estadía</h2>
                    <hr/>
                    </div>
                </div>
               {/*<div>
                    <h3 className="titleFeatured">Destacados de la semana</h3>
                    <hr></hr>
                    <div className="featuredGames">
                    <div className="cardFeatured">
                        <Link to='snake' className=''>
                        <img
                            className="imgFeatured"
                            src={snake}
                            alt="First slide"
                        />
                        </Link>
                        <p>Rememora el clásico juego de la serpiente que nos encandiló a todos con el mítico Nokia 3310</p>
                        <Link to='snake' className=''>
                        <button className="buttonFeatured"> JUGAR AHORA </button>
                        </Link>
                    </div>
                    <div className="cardFeatured">
                        <Link to='OneToFifty' className=''>
                        <img
                            className="imgFeatured"
                            src={OneToFifty}
                            alt="First slide"
                        />
                        </Link>
                        <p>El juego de moda que te dejará enganchado por horas!</p>
                        <Link to='OneToFifty' className=''>
                        <button className="buttonFeatured"> JUGAR AHORA </button>
                        </Link>
                    </div>
                    </div>

                    <div className="cardFeatured">
                    <Link to='MemoryGame' className=''>
                        <img
                        className="imgFeatured"
                        src={memory}
                        alt="First slide"
                        />
                    </Link>
                        <p>¿Serás capaz de encontrar cartas parejas de los presidentes?</p>
                    <Link to='MemoryGame' className=''>
                        <button className="buttonFeatured"> JUGAR AHORA </button>
                    </Link>
                    </div>
                </div>*/} 
        </div>
    
    )
}

export default GamesSection