import React from 'react';
import { Container, Title } from './CheckoutPageElements';
import { DeliveryOption } from './DeliveryOption';
import { Dates } from './Dates';
import { UserInformation } from './UserInformation';

interface Props {}

export const CheckOut = (props: Props) => {
  return (
    <Container>
      <Title>Checkout</Title>
      <DeliveryOption />
      <Dates />
      <UserInformation />
    </Container>
  );
};
