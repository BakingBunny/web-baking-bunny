import React from 'react';
import { Cart } from '../components/CartPage';

interface Props {}

export const CartPage = (props: Props) => {
  window.scrollTo(0, 0);

  return (
    <>
      <Cart />
    </>
  );
};
