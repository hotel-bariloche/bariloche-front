import React from 'react';
import BannerHome from './BannerHome';
import AboutUs from './AboutUs';
import DestinoBariloche from './DestinoBariloche';
import Video from './Video';
import Servicios from './Servicios';
import ExploreRooms from '../exploreRooms';
import '../../css/style.css';

const Home = () => {
    return(
        <div>
            <BannerHome/>
            <AboutUs/>
            <DestinoBariloche/>
            <Video/>
            <Servicios/>
            <ExploreRooms/>
        </div>
    )
}

export default Home