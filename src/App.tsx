import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from 'react-router-dom';
import { HomePage } from './pages';
import { CakePage } from './pages/CakePage';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' component={HomePage} exact />
          <Route path='/cakes' component={CakePage} exact />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
