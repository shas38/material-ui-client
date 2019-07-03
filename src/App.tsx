import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './App.css';
import Home from './pages/Home'
import Writers from './pages/Writers'
import Form from './pages/Form/Form'
import TopNavigation from "./navigation/TopNavigation"
import reduxReducers from './reducers/reduxReducers';

const store = createStore(reduxReducers);

function App() {

  return (
    <Provider store={store}>
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
              path="/forms"
              component={Form}
            />
            <Route
              render={()=> <h1>Not Found</h1>}
            />
          </Switch>
        </TopNavigation>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
