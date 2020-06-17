import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from 'react-bootstrap/Image'
import bed1 from '../img/home/bed-icon.png';
import gallery1 from '../img/gallery/g1.png';
import gallery2 from '../img/gallery/g2.png';
import gallery3 from '../img/gallery/g3.png';
import gallery4 from '../img/gallery/g4.png';
import gallery5 from '../img/gallery/g5.png';
import gallery6 from '../img/gallery/g6.png';
import gallery7 from '../img/gallery/g7.png';





const Gallery = () => {
    return(
        <div>
            <section className="blog-banner-area" id="blog">
                <Container className="container h-100">
                    <div className="blog-banner">
                        <div className="text-center">
                            <h1>Galería de Imagenes</h1>
                        <nav aria-label="breadcrumb" className="banner-breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Galería</li>
                            </ol>
                        </nav>
                        </div>
                    </div>
                </Container>
            </section>
        <section className="section-margin">
            <Container className="">
                <div className="section-intro text-center pb-80px">
                    <div className="section-intro__style">
                    <Image src={bed1} alt=""></Image>
                    </div>
                    <h2>Nuestra Galería</h2>
                    </div>

			    <Row className="row">
				<Col md={5}>
					<Row className="row">
						<Col className="col-12 mb-4">
							<a href="" className="img-gal card-img">
								<div className="single-imgs relative">		
									<div className="overlay overlay-bg"></div>
									<div className="relative">				
										<Image className="card-img rounded-0" src={gallery1} alt=""></Image>		
									</div>
								</div>
							</a>
						</Col>
						<Col className="col-12 mb-4">
							<a href="" className="img-gal card-img">
								<div className="single-imgs relative">		
									<div className="overlay overlay-bg"></div>
									<div className="relative">				
										<Image className="card-img rounded-0" src={gallery2} alt=""></Image>		
									</div>
								</div>
							</a>
						</Col>
					</Row>
				</Col>

				<Col className="col-md-7">
					<Row className="row">
						<Col sm={7} className="mb-4">
							<a href="" className="img-gal card-img">
								<div className="single-imgs relative">		
									<div className="overlay overlay-bg"></div>
									<div className="relative">				
										<Image className="card-img rounded-0" src={gallery3} alt=""></Image>		
									</div>
								</div>
							</a>
						</Col>
						<Col sm={5} className="mb-4">
							<a href="" className="img-gal card-img">
								<div className="single-imgs relative">		
									<div className="overlay overlay-bg"></div>
									<div className="relative">				
										<Image className="card-img rounded-0" src={gallery4} alt=""></Image>		
									</div>
								</div>
							</a>
						</Col>
					</Row>
					<Row className="row">
						<Col className="col-12 mb-4">
							<a href="" className="img-gal card-img">
								<div className="single-imgs relative">		
									<div className="overlay overlay-bg"></div>
									<div className="relative">				
										<Image className="card-img rounded-0" src={gallery5} alt=""></Image>		
									</div>
								</div>
							</a>
						</Col>
					</Row>
					<Row className="row">
						<Col sm={7} className="mb-4">
							<a href="" className="img-gal card-img">
								<div className="single-imgs relative">		
									<div className="overlay overlay-bg"></div>
									<div className="relative">				
										<Image className="card-img rounded-0" src={gallery6} alt=""></Image>		
									</div>
								</div>
							</a>
						</Col>
						<Col sm={5} className="mb-4">
							<a href="" className="img-gal card-img">
								<div className="single-imgs relative">		
									<div className="overlay overlay-bg"></div>
									<div className="relative">				
										<Image className="card-img rounded-0" src={gallery7} alt=""></Image>		
									</div>
								</div>
							</a>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	</section>
        </div>
    )
}

export default Gallery