import React from 'react';
import './App.css';
import { Switch, Route, Router } from 'react-router-dom';
import NavHome from './components/Navbar/navbar';
import Home from './components/Home';
import Blog from './components/Blog/Blog';
import { FaBlog } from 'react-icons/fa';


class App extends React.Component {
  render() {
    return(
      <div>
        <NavHome/>
          <Switch>
            <Route exact path="/" component= {Home}/>
            <Route path="/habitaciones"/>
            <Route path="/blog" component= {Blog}>
              <Blog/>
            </Route>
          </Switch>
      </div>
    )
  }
}

export default App;
