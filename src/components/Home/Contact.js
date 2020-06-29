import React from 'react';
import { FaPhoneVolume, FaRegEnvelope, FaRegBuilding } from "react-icons/fa";
import bed1 from '../img/home/bed-icon.png';
import { Context } from '../../Context/Provider';




const ContactHome = () => {
    const { state, changeLanguage } = React.useContext(Context);

    return(
        <div style={{ backgroundColor: '#f7f9f9', padding: '20px'}}>
            <div className="section-intro text-center pb-20px">
            <div className="section-intro__style">
                <img src={bed1} alt=""></img>
            </div>
            <h2>{state.texts[state.language].home.contact.title}</h2>
            </div>
  
             <section className="section-margin">
                <div className="container">
                    <div className="row">
                <div className="col-md-4 col-lg-3 mb-4 mb-md-0">
                <div className="media contact-info">
                    <span className="contact-info__icon"><i className="ti-home"><FaRegBuilding/></i></span>
                    <div className="media-body">
                    <h3>Mitre 408</h3>
                    <p>San Carlos de Bariloche Río Negro</p>
                </div>
                </div>
                <div className="media contact-info">
                    <span className="contact-info__icon"><i className="ti-headphone"><FaPhoneVolume/></i></span>
                    <div className="media-body">
                    <h3><a href="tel:454545654">{state.texts[state.language].home.contact.phone}</a></h3>
                    <p>+54 294 4430622</p>
                    </div>
                </div>
                <div className="media contact-info">
                    <span className="contact-info__icon"><i className="ti-email"><FaRegEnvelope/></i></span>
                    <div className="media-body">
                    <h3><a href="mailto:support@colorlib.com">Email</a></h3>
                    <p>reservas@grandhotelbariloche.com</p>
                    </div>
                </div>
                </div>
                <div className="col-md-8 col-lg-9">
                <form className="row contact_form" action="mailto:mireiapgomariz@gmail.com" method="post" id="contactForm" encType="multipart/form-data"
                    noValidate="novalidate" name="EmailTestForm">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" className="form-control" id="name" name="name" placeholder={state.texts[state.language].home.contact.placeholder.name}/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" id="email" name="email" placeholder={state.texts[state.language].home.contact.placeholder.email}/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="subject" name="subject" placeholder={state.texts[state.language].home.contact.placeholder.subject}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <textarea className="form-control different-control" name="message" id="message" rows="5" placeholder={state.texts[state.language].home.contact.placeholder.message}></textarea>
                        </div>
                    </div>
                    <div className="col-md-12 text-right">
                        <button type="submit" value="submit" className="button-contact"><span>{state.texts[state.language].home.contact.placeholder.button}</span></button>
                    </div>
                </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactHome