  
import React from 'react';
import { FaPhoneVolume, FaRegEnvelope, FaRegBuilding } from "react-icons/fa";
import '../../css/style.css';
import { Context } from '../../Context/Provider';


const Contact = () => {
    const { state, changeLanguage } = React.useContext(Context);

    return(
         <div>
            <section className="contact-banner-area" id="contact">
                <div className="container h-100">
                    <div className="contact-banner">
                        <div className="text-center">
                            <h1>Contact Us</h1>
                            <div className="row">
                                <div className="col">
                                <button className="button-contact">
                                    Send Email
                                </button>
                                </div>
                            </div>
                        </div>
                        <div className="container contact-sites">
                            <div className="row d-flex justify-content-between mr-5">
                                <div className="col-md-4 col-lg-3">
                                    <div className="media contact-info">
                                        <span className="contact-info__icon"><i className="ti-home"><FaRegBuilding/></i></span>
                                        <div className="media-body">
                                            <h3>Mitre 408</h3>
                                            <p>San Carlos de Bariloche Río Negro</p>
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-4 col-lg-3">
                                   <div className="media contact-info">    
                                        <span className="contact-info__icon"><i className="ti-headphone"><FaPhoneVolume/></i></span>
                                        <div className="media-body">
                                            <h3><a href="tel:454545654">{state.texts[state.language].home.contact.phone}</a></h3>
                                            <p>+54 294 4430622</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-3">
                                    <div className="media contact-info">    

                                        <span className="contact-info__icon"><i className="ti-email"><FaRegEnvelope/></i></span>
                                        <div className="media-body">
                                            <h3><a href="mailto:support@colorlib.com">Email</a></h3>
                                            <p>reservas@grandhotelbariloche.com</p>
                                        </div>
                                    </div>
                                </div>

                                
                                
                            </div>
                        </div>
                    </div>
                </div>
	        </section>
        </div>
       
    )
}

export default Contact