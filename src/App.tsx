import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from 'react-router-dom';
import { HomePage } from './pages';
import { ProductListPage } from './pages/ProductListPage';
import { ProductPage } from './pages/ProductDetailPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Navbar } from './component/Navbar';
import { CartPage } from './pages/CartPage';
import { Footer } from './component/Footer';

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
          <Route
            path={['/cakes/:id', '/dacquoises/:id']}
            component={ProductPage}
            exact
          />
          <Route path='/cart' component={CartPage} exact />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
