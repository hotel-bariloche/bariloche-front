import React from 'react';
import '../css/style.css';
import { Context } from '../Context/Provider';


const Banner = () => {
    const { state } = React.useContext(Context);

  return(
        <div>
           <section className="home-banner-area" id="home">
                <div className="container h-100">
                    <div className="home-banner">
                    <div className="text-center">
                        <h4>{state.texts[state.language].title}</h4>
                        <h1>Luxury <em>is</em> personal</h1>
                        <a className="button home-banner-btn" href="#">Reservar</a>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Banner