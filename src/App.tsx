import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from 'react-router-dom';
import styled from 'styled-components';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages';
import { CategoryPage } from './pages/CategoryPage';
import { ProductPage } from './pages/ProductPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { Footer } from './components/Footer';
import { NotFoundPage } from './pages/NotFoundPage';
import { useCountCartItems } from './hooks/useCountCartItems';
import { ReviewPage } from './pages/ReviewPage';
import useValid from './hooks/useCheckOutValid';
import { ConfirmPage } from './pages/ConfirmPage';
import { ProductInterface } from './interface/ProductInterface';

const BodyContainer = styled.main`
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
              path={'/category/:productCategory'}
              component={CategoryPage}
              exact
            />
            <Route path={'/product/:productId'} component={ProductPage} exact />
            <Route path='/cart' component={CartPage} exact />
            {countCartItems > 0 && (
              <Route path='/checkout' component={CheckoutPage} exact />
            )}
            {isValid && <Route path='/review' component={ReviewPage} exact />}
            {isValid && <Route path='/confirm' component={ConfirmPage} exact />}
            <Route component={NotFoundPage} />
          </Switch>
        </BodyContainer>
        <Footer />
      </Router>
    </>
  );
}

export default App;
