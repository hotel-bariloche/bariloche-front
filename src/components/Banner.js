import React from 'react';
import '../css/style.css'
import Sunset from './img/gallery/sunset.png'

const Banner = () => {
  return(
        <div>
           <section className="home-banner-area" id="home">
                <div className="container h-100">
                    <div className="home-banner">
                    <div className="text-center">
                        <h4>See What a Difference a stay makes</h4>
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