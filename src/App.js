import React from 'react';
import './App.css';
import Header from './Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
          <Header />
            <h2>checkout</h2>
          </Route>
          <Route path='/login'>
            <h2>Login</h2>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
