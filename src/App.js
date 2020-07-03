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
import Gallery from './components/Gallery/gallery';
import ScrollTop from './Utils/ScrollTop';



class App extends React.Component {
  render() {
    return(
      <AppContext>
        <ScrollTop>
        <NavHome/>
          <Switch>
            <Route exact path="/" component= {Home}/>
            <Route path="/blog" component= {Blog}>
              <Blog/>
            </Route>
            <Route path="/rooms" component= {Rooms}>
              <Rooms/>
            </Route>
            <Route path="/contacto" component= {Contact}>
              <Contact/>
            </Route>
            <Route path="/gallery" component= {Gallery}>
              <Gallery/>
            </Route>
          </Switch>
        <Footer/>
        </ScrollTop>
      </AppContext>
    )
  }
}

export default App;
