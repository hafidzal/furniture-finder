import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, HashRouter } from "react-router-dom";

import Home from './container/home';
// import Ghibli from './container/ghibli';

function App() {
  return (
    <div className="App">
      <Router>
         <Route path="/" exact component={Home} />
         <Route path={`/:searchQuery`} component={Home} />
      </Router>
    </div>
  );
}

export default App;
