import React from 'react';
import BannerHome from './BannerHome';
import AboutUs from './AboutUs';
import DestinoBariloche from './DestinoBariloche';
import Video from './Video';
import ExploreRooms from '../exploreRooms';
import Reviews from './Reviews';
import ContactHome from './Contact.js';

import '../../css/style.css';

const Home = () => {
    return(
        <div>
            <BannerHome/>
            <AboutUs/>
            <DestinoBariloche/>
            <Video/>
            <ExploreRooms/>
            <Reviews/>
            <ContactHome/>
        </div>
    )
}

export default Home