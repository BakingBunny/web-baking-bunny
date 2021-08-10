import React from 'react';
import { CheckOut } from '../components/CheckOutPage';

interface Props {}

export const CheckoutPage = (props: Props) => {
  window.scrollTo(0, 0);

  return (
    <>
      <CheckOut />
    </>
  );
};
