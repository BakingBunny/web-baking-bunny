import React from 'react';
import { Container, Title } from './CheckoutPageElements';
import { Dates } from './Dates';
import { DeliveryOption } from './DeliveryOption';

interface Props {}

export const CheckOut = (props: Props) => {
  return (
    <Container>
      <Title>Checkout</Title>
      <DeliveryOption />
      <Dates />
    </Container>
  );
};
