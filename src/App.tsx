import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages';
import { CategoryPage } from './pages/CategoryPage';
import { ProductPage } from './pages/ProductPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { Footer } from './components/Footer';
import { NotFoundPage } from './pages/NotFoundPage';
import { ReviewPage } from './pages/ReviewPage';
import { ConfirmPage } from './pages/ConfirmPage';
import { CustomCakeCheckOutPage } from './pages/CustomCakeCheckOutPage';
import { CustomCakeReviewPage } from './pages/CustomCakeReviewPage';
import { CustomCakeConfirmPage } from './pages/CustomCakeConfirmPage';

const BodyContainer = styled.main`
  min-height: calc(100vh - 60px - 30px);
`;

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <BodyContainer>
          <Switch>
            <Route path='/' component={HomePage} exact />
            <Route
              path={'/category/:categoryId'}
              component={CategoryPage}
              exact
            />
            <Route path={'/product/:productId'} component={ProductPage} exact />
            <Route path={'/cart'} component={CartPage} exact />
            <Route path={'/checkout'} component={CheckoutPage} exact />
            <Route path={'/review'} component={ReviewPage} exact />
            <Route path={'/confirm'} component={ConfirmPage} exact />
            <Route
              path={'/custom-cake/checkout'}
              component={CustomCakeCheckOutPage}
              exact
            />
            <Route
              path={'/custom-cake/review'}
              component={CustomCakeReviewPage}
              exact
            />
            <Route
              path='/custom-cake/confirm'
              component={CustomCakeConfirmPage}
              exact
            />
            <Route component={NotFoundPage} />
          </Switch>
        </BodyContainer>
        <Footer />
      </Router>
    </>
  );
}

export default App;
