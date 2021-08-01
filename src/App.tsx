import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages';
import { ProductListPage } from './pages/ProductListPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { Footer } from './components/Footer';
import { NotFoundPage } from './pages/NotFoundPage';
import { useCountCartItems } from './hooks/useCountCartItems';

function App() {
  const countCartItems = useCountCartItems();
  console.log(countCartItems);

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
          {countCartItems > 0 && (
            <Route path='/checkout' component={CheckoutPage} exact />
          )}
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
