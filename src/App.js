import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavHome from './components/Navbar/navbar';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Rooms from './components/Rooms/Rooms';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/footer';
import AppContext from './Context/Provider';
import Galeria from './components/Galeria/Galeria';
import ScrollTop from './Utils/ScrollTop';
import Page from './components/Page/Page'

class App extends React.Component {
  render() {
    return(
      <AppContext>
        <ScrollTop>
        <NavHome/>
          <Switch>
            <Page exact path="/" title='home'>
              <Home/>  
            </Page>            
            <Page path="/blog" title='location  '>
              <Blog/>
            </Page>
            <Page path="/rooms" title='rooms'>
              <Rooms/>
            </Page>
            <Page path="/contacto" title='contact'>
              <Contact/>
            </Page>
            <Page path="/gallery" title='gallery'>
              <Galeria/>
            </Page>
          </Switch>
        <Footer/>
        </ScrollTop>
      </AppContext>
    )
  }
}

export default App;
