import React from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { Container, Title } from './CheckoutPageElements';
import { DeliveryOption } from './DeliveryOption';
import { Dates } from './Dates';
import { UserInformation } from './UserInformation';

interface Props {}

export const CheckOut = (props: Props) => {
  const methods = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Container>
          <Title>Checkout</Title>
          <DeliveryOption />
          <Dates />
          <UserInformation />
        </Container>
      </form>
    </FormProvider>
  );
};
