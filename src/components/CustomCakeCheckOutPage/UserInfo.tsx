import React from 'react';
import { userInfo } from '../../store/userInfoSlice';
import { customCake } from '../../store/customCakeSlice';
import { useAppSelector } from '../../store/hooks';
import { CustomCakeInterface } from '../../interface/CustomCakeInterface';
import { UserInfoInterface } from '../../interface/UserInfoInterface';
import {
  OptionWrapper,
  ClientInputWrapper,
  CheckOutQuestion,
  PostalCodeDisplay,
  PostalCodeLabel,
  DeliveryOnlyInputWrapper,
} from './CheckoutPageElements';
import { useUserInput } from '../../hooks/useUserInput';

interface Props {}

export const UserInfo = (props: Props) => {
  const customCakeState = useAppSelector<CustomCakeInterface>(customCake);
  const userInfoState = useAppSelector<UserInfoInterface>(userInfo);

  return (
    <OptionWrapper>
      <CheckOutQuestion>Please tell us who you are :)</CheckOutQuestion>
      {useUserInput('firstname', 'First name', userInfoState.firstname)}
      {useUserInput('lastname', 'Last name', userInfoState.lastname)}
      {useUserInput('email', 'Email', userInfoState.email, 'email')}
      {useUserInput('phone', 'Phone number', userInfoState.phone, 'tel')}
      <DeliveryOnlyInputWrapper isDisplay={customCakeState.isDelivery === true}>
        {useUserInput(
          'address',
          'Address',
          userInfoState.address,
          'text',
          '000 0st SW',
          customCakeState.isDelivery === true
        )}
        <ClientInputWrapper>
          <PostalCodeDisplay>{userInfoState.postalCode}</PostalCodeDisplay>
          <PostalCodeLabel>
            <span>Postal Code</span>
          </PostalCodeLabel>
        </ClientInputWrapper>
        {useUserInput(
          'city',
          'City',
          userInfoState.city,
          'text',
          '',
          customCakeState.isDelivery === true
        )}
      </DeliveryOnlyInputWrapper>
    </OptionWrapper>
  );
};
