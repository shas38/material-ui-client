import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Writers from './pages/Writers'
import TopNavigation from "./navigation/TopNavigation"

function App() {




  return (

      <BrowserRouter>
        <TopNavigation>
          <Switch>
            <Route 
              exact 
              path="/"
              component={Home}
            />
            <Route
              path="/writers"
              component={Writers}
            />
            <Route
              render={()=> <h1>Not Found</h1>}
            />
          </Switch>
        </TopNavigation>
      </BrowserRouter>
  );
}

export default App;
