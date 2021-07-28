import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { CheckOutInterface } from '../../interface/CheckOutInterface';
import { Container, Title } from './CheckoutPageElements';
import { DeliveryOption } from './DeliveryOption';
import { Dates } from './Dates';
import { UserInformation } from './UserInformation';
import { DevTool } from '@hookform/devtools'; //TODO: Delete later

interface Props {}

export const CheckOut = (props: Props) => {
  const methods = useForm();
  const { control } = useForm({
    mode: 'onChange',
  });
  const onSubmit = (data: CheckOutInterface) => console.log(data);

  return (
    <FormProvider {...methods}>
      <Container onSubmit={methods.handleSubmit(onSubmit)}>
        <Title>Checkout</Title>
        <DeliveryOption />
        <Dates />
        <UserInformation />
      </Container>
      <DevTool control={control} placement='bottom-right' />
    </FormProvider>
  );
};
