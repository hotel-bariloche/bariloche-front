import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

class App extends React.Component {
  render() {
    return(
      <div>
        <Navbar/>
        <Switch>
          <Route path="/"/>
          <Route path="/habitaciones"/>
          <Route path="/blog"/>
        </Switch>
      </div>
    )
  }
}

export default App;
