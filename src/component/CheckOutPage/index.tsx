import React from 'react';
import { Container, Title } from './CheckoutPageElements';
import { DeliveryOption } from './DeliveryOption';
import { Dates } from './Dates';
import { ClientInformation } from './ClientInformation';

interface Props {}

export const CheckOut = (props: Props) => {
  return (
    <Container>
      <Title>Checkout</Title>
      <DeliveryOption />
      <Dates />
      <ClientInformation />
    </Container>
  );
};
