import React from 'react';
import Image from 'react-bootstrap/Image'
import { Container, Row, Col } from 'reactstrap';


const Rooms = () => {
    return(
    <div>
        <section className="blog-banner-area" id="blog">
            <div className="container h-100">
                <div className="blog-banner">
                    <div className="text-center">
                        <h1>Nuestras Habitaciones</h1>
                    <nav aria-label="breadcrumb" className="banner-breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Habitaciones</li>
                    </ol>
                    </nav>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}

export default Rooms