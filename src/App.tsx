import React, {useState, useEffect, useReducer} from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Writers from './pages/Writers'


function App() {




  return (


    <div>
      {/* <TopNavigation/> */}
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/writers">writers</Link>
          </li>
        </ul>
      
        <Route exact path="/"
          component={Home}
        />
        <Route
          path="/writers"
          component={Writers}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
