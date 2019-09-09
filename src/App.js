import React from 'react';
import {Route, NavLink} from 'react-router-dom';

import Home from './components/Home';
import AvengersList from './components/AvengersList';
import AvengersPage from './components/AvengersPage';
import './App.css';
import {avengers} from './data';



function App() {

  return (
    <div className="App">
      <ul className="navbar">
        <li><NavLink activeClassName='activeNavButton' to="/">Home</NavLink></li>
        <li><NavLink activeClassName='activeNavButton' to="/avengers">Avengers</NavLink></li>
      </ul>
      <Route exact path='/' component={Home}/>
      <Route exact path='/avengers' render={(props) => <AvengersList {...props} avengers={avengers}/>}/>
      <Route path='/avengers/:id' render={(props) => <AvengersPage {...props} avengers={avengers}/>}/>
    </div>
  );
}

export default App;
