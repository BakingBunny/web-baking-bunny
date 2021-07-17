import React from 'react';
import { Container } from './CheckoutPageElements';
import { DeliveryOption } from './DeliveryOption';

interface Props {}

export const CheckOut = (props: Props) => {
  return (
    <Container>
      <DeliveryOption />
    </Container>
  );
};
