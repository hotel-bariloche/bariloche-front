import React from 'react';
import '../../css/style.css';
import { FaPhoneVolume, FaRegEnvelope, FaRegBuilding } from "react-icons/fa";
import { Context } from '../../Context/Provider';
import bed1 from '../img/home/bed-icon.png';

const SendEmail = () => {
    const { state, changeLanguage } = React.useContext(Context);

    return(
        <div>
            <div style={{ backgroundColor: '#f7f9f9', padding: '20px'}}>
            <div className="section-intro text-center pb-20px">
            <div className="section-intro__style">
                <img src={bed1} alt=""></img>
            </div>
            <h2>{state.texts[state.language].home.contact.title}</h2>
            </div>
  
             <section className="section-margin"></section>
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
            </div>
            </div>
            </div>
        </div>
    )
}

export default SendEmail