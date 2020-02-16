import React from 'react';
import './App.css';

import logo from './img/logo.png';
import cart from './img/cart.png';

import {BrowserRouter as Router, Link} from 'react-router-dom';
import Routes from './routes';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Link to='/'><img className = 'logo' src={logo}/></Link>
        <a href="#"><img className = 'cart' src={cart}/></a>
      </header>
        <Routes />
    </div>
    </Router>
  );
}

export default App;
