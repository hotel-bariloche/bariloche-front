import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-grid-gallery';
import { Container, Row, Col } from 'reactstrap';
import Image from 'react-bootstrap/Image'
import bed1 from '../img/home/bed-icon.png';
import barilo from '../img/gallery/barilo.jpg';
import barilo2 from '../img/gallery/barilo2.jpg';
import barilo3 from '../img/gallery/barilo3.jpg';
import dobleroom from '../img/gallery/dobleroom.jpg';
import hall from '../img/gallery/hall.jpg';
import hotelinside2 from '../img/gallery/hotelinside2.jpg';
import reception2 from '../img/gallery/reception2.jpg';
import economytriple from '../img/gallery/economy-triple.jpg';
import buffet from '../img/gallery/buffet.jpg';
import buffet2 from '../img/gallery/buffet2.jpg';
import buffet3 from '../img/gallery/buffet3.jpg';
import buffet4 from '../img/gallery/buffet4.jpg';
import buffet5 from '../img/gallery/buffet5.jpg';
import buffet6 from '../img/gallery/buffet6.jpg';
import buffet7 from '../img/gallery/buffet7.jpg';
import coffee from '../img/gallery/coffee.jpg';
import coffee2 from '../img/gallery/coffee2.jpg';
import { Context } from '../../Context/Provider';
import Booking from '../Booking/Booking';
var shuffle = require('shuffle-array');

class Galeria extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            images: this.props.images
        };

    }

    render () {
        return (
            <div>
                    <section className="blog-banner-area" id="blog">
                        <Container className="container h-100">
                            <div className="blog-banner">
                                <div className="text-center">
                                    <h1>Galeria</h1>
                                <nav aria-label="breadcrumb" className="banner-breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">ggaleria</li>
                                    </ol>
                                </nav>
                                </div>
                            </div>
                        </Container>
                    </section>
                    <Booking/>
                    <div style={{
                        display: "block",
                        minHeight: "10px",
                        width: "70%",
                        border: "1px solid #ddd",
                        overflow: "auto"}}>
                    <Gallery
                images={this.state.images}
                enableLightbox={false}
                enableImageSelection={false}/>
                    </div>
            </div>
        );
    }
}

Galeria.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
            srcset: PropTypes.array,
            caption: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.element
            ]),
            thumbnailWidth: PropTypes.number.isRequired,
            thumbnailHeight: PropTypes.number.isRequired
        })
    ).isRequired
};

Galeria.defaultProps = {
    images: shuffle([
        {
            src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
            thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 174,
            caption: "After Rain (Jeshu John - designerspics.com)"
        },
        {
            src: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg",
            thumbnail: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 183,
            caption: "37H (gratispgraphy.com)"
        },
        {
            src: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg",
            thumbnail: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_n.jpg",
            thumbnailWidth: 271,
            thumbnailHeight: 320,
            caption: "Orange Macro (Tom Eversley - isorepublic.com)"
        },
        {
            src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
            thumbnail: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            caption: "201H (gratisography.com)"
        },
        {
            src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
            thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)"
        },
        {
            src: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_b.jpg",
            thumbnail: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            caption: "Man on BMX (Tom Eversley - isorepublic.com)"
        },
        {
            src: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg",
            thumbnail: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            caption: "Ropeman - Thailand (Tom Eversley - isorepublic.com)"
        },
        {
            src: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_b.jpg",
            thumbnail: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_n.jpg",
            thumbnailWidth: 257,
            thumbnailHeight: 320,
            caption: "A photo by 贝莉儿 NG. (unsplash.com)"
        }
    ])
}


export default Galeria