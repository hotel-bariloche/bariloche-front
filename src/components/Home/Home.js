import React from 'react';
import BannerHome from './BannerHome';
import AboutUs from './AboutUs';
import DestinoBariloche from './DestinoBariloche';
import Video from './Video';
import Reviews from './Reviews';
import SendEmail from './SendEmail.js';

import '../../css/style.css';

const Home = () => {
    return(
        <div>
            <BannerHome/>
            <AboutUs/>
            <DestinoBariloche/>
            <Video/>
            <Reviews/>
            <SendEmail/>
        </div>
    )
}

export default Home