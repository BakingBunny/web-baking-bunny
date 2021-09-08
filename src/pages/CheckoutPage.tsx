import React from 'react';
import { CheckOut } from '../components/CheckOutPage';
import { useCheckOutPageValid } from '../hooks/useValidation';
import { NotFoundPage } from './NotFoundPage';
interface Props {}

export const CheckoutPage = (props: Props) => {
  window.scrollTo(0, 0);
  const isValid: boolean = useCheckOutPageValid();

  return isValid ? <CheckOut /> : <NotFoundPage />;
};
