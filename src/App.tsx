import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from 'react-router-dom';
import { Navbar } from './component/Navbar';
import { HomePage } from './pages';
import { ProductListPage } from './pages/ProductListPage';
import { CartPage } from './pages/CartPage';
import { PickADatePage } from './pages/PickADatePage';
import { Footer } from './component/Footer';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' component={HomePage} exact />
          <Route
            path={['/cakes', '/dacquoises']}
            component={ProductListPage}
            exact
          />
          <Route path='/cart' component={CartPage} exact />
          <Route path='/pick-a-date' component={PickADatePage} exact />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
