import React from 'react';
import Banner from './Banner';
import AboutUs from './AboutUs';
import Video from './Video';
import Servicios from './Servicios';
import ExploreRooms from './exploreRooms';

import '../css/style.css';

const Home = () => {
    return(
        <div>
            <Banner/>
            <AboutUs/>
            <Video/>
            <Servicios/>
            <ExploreRooms/>
        </div>
    )
}

export default Home