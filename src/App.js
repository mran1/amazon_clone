import React from 'react';
import './App.css';
import Header from './Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <h2>checkout</h2>
          </Route>
          <Route path='/login'>
            <h2>Login</h2>
          </Route>
          <Route path='/'>
            <Header />
            <h2>Home</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
