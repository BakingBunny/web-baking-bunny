import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from 'react-router-dom';
import styled from 'styled-components';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages';
import { ProductListPage } from './pages/ProductListPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { Footer } from './components/Footer';
import { NotFoundPage } from './pages/NotFoundPage';
import { useCountCartItems } from './hooks/useCountCartItems';
import { ReviewPage } from './pages/ReviewPage';
import useValid from './hooks/useCheckOutValid';

const BodyContainer = styled.div`
  min-height: calc(100vh - 60px - 30px);
`;

function App() {
  const countCartItems = useCountCartItems();
  const isValid: boolean = useValid();

  return (
    <>
      <Router>
        <Navbar />
        <BodyContainer>
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
            {isValid && <Route path='/review' component={ReviewPage} exact />}
            <Route component={NotFoundPage} />
          </Switch>
        </BodyContainer>
        <Footer />
      </Router>
    </>
  );
}

export default App;
