import React from 'react';
import { userInfo } from '../../store/userInfoSlice';
import { orderList } from '../../store/orderListSlice';
// import { orderList } from '../../store/orderListSlice';
import { useAppSelector } from '../../store/hooks';
import { OrderListInterface } from '../../interface/OrderListInterface';
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
// import { OrderListInterface } from '../../interface/OrderListInterface';

interface Props {}

export const UserInfo = (props: Props) => {
  const orderListState = useAppSelector<OrderListInterface>(orderList);
  const userInfoState = useAppSelector<UserInfoInterface>(userInfo);
  // const orderListState = useAppSelector<OrderListInterface>(orderList);

  return (
    <OptionWrapper>
      <CheckOutQuestion>Please tell us who you are :)</CheckOutQuestion>
      {useUserInput('firstname', 'First name', userInfoState.firstname)}
      {useUserInput('lastname', 'Last name', userInfoState.lastname)}
      {useUserInput('email', 'Email', userInfoState.email, 'email')}
      {useUserInput('phone', 'Phone number', userInfoState.phone, 'tel')}
      <DeliveryOnlyInputWrapper isDisplay={orderListState.isDelivery === true}>
        {useUserInput(
          'address',
          'Address',
          userInfoState.address,
          'text',
          '000 0st SW',
          orderListState.isDelivery === true
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
          orderListState.isDelivery === true
        )}
      </DeliveryOnlyInputWrapper>
      {useUserInput('allergy', 'Any food allergies?', userInfoState.allergy)}
      {useUserInput('inquiry', 'Any other inquiries?', userInfoState.inquiry)}
    </OptionWrapper>
  );
};
