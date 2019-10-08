import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Login from './components/Login';
import Public from './components/Public';
import Private from './components/Private';

import ProtectedRoute from './utils/ProtectedRoute';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Public} />
          <Route exact path='/Login' component={Login} />
          <ProtectedRoute path='/Dashboard' component={Private} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
