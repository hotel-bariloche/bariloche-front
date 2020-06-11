import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavHome from './components/Navbar/navbar';
import Home from './components/Home'


class App extends React.Component {
  render() {
    return(
      <div>
        <NavHome/>
        <Switch>
          <Route path="/" component= {Home}/>
          <Route path="/habitaciones"/>
          <Route path="/blog"/>
        </Switch>
      </div>
    )
  }
}

export default App;
