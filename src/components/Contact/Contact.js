import React from 'react';
import { FaPhoneVolume, FaRegEnvelope, FaRegBuilding } from "react-icons/fa";
import '../../css/style.css';

const Contact = () => {
    return(
        <div>
            <section className="contact-banner-area" id="contact">
                <div className="container h-100">
                    <div className="contact-banner">
                        <div className="text-center">
                            <h1>Contact Us</h1>
                            <nav aria-label="breadcrumb" className="banner-breadcrumb">
                                <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
	        </section>
            <section className="section-margin">
                <div className="container">
                    <div className="row">
                <div className="col-md-4 col-lg-3 mb-4 mb-md-0">
                <div className="media contact-info">
                    <span className="contact-info__icon"><i className="ti-home"><FaRegBuilding/></i></span>
                    <div className="media-body">
                    <h3>California United States</h3>
                    <p>Santa monica bullevard</p>
                </div>
                </div>
                <div className="media contact-info">
                    <span className="contact-info__icon"><i className="ti-headphone"><FaPhoneVolume/></i></span>
                    <div className="media-body">
                    <h3><a href="tel:454545654">00 (440) 9865 562</a></h3>
                    <p>Mon to Fri 9am to 6pm</p>
                    </div>
                </div>
                <div className="media contact-info">
                    <span className="contact-info__icon"><i className="ti-email"><FaRegEnvelope/></i></span>
                    <div className="media-body">
                    <h3><a href="mailto:support@colorlib.com">support@colorlib.com</a></h3>
                    <p>Send us your query anytime!</p>
                    </div>
                </div>
                </div>
                <div className="col-md-8 col-lg-9">
                <form className="row contact_form" action="contact_process.php" method="post" id="contactForm"
                    novalidate="novalidate">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name"/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" id="email" name="email" placeholder="Enter email address"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="subject" name="subject" placeholder="Enter Subject"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <textarea className="form-control different-control" name="message" id="message" rows="5" placeholder="Enter Message"></textarea>
                        </div>
                    </div>
                    <div className="col-md-12 text-right">
                        <button type="submit" value="submit" className="button-contact"><span>Send Message</span></button>
                    </div>
                </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact