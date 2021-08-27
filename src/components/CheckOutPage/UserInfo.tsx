import React, { useCallback } from 'react';
import { userInfo } from '../../store/userInfoSlice';
import { orderList, update } from '../../store/orderListSlice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { OrderListInterface } from '../../interface/OrderListInterface';
import { UserInfoInterface } from '../../interface/UserInfoInterface';
import {
  OptionWrapper,
  ClientInputWrapper,
  CheckOutQuestion,
  PostalCodeDisplay,
  PostalCodeLabel,
  DeliveryOnlyInputWrapper,
  ClientTextareaWrapper,
  ClientInfoTextarea,
  ClientInfoTextAreaLabel,
} from './CheckoutPageElements';
import { useUserInput } from '../../hooks/useUserInput';

interface Props {}

export const UserInfo = (props: Props) => {
  const orderListState = useAppSelector<OrderListInterface>(orderList);
  const userInfoState = useAppSelector<UserInfoInterface>(userInfo);
  const dispatch = useAppDispatch();

  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
      dispatch(
        update({
          name: e.target.name,
          value: e.target.value,
        })
      );
    },
    [dispatch]
  );

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
      <ClientTextareaWrapper>
        <ClientInfoTextAreaLabel>
          <span>Any food allergies?</span>
        </ClientInfoTextAreaLabel>
        <ClientInfoTextarea
          name='allergy'
          placeholder='If you have any food allergies, please leave it here.'
          onChange={onChangeHandler}
          value={orderListState.allergy}
          rows={3}
        />
      </ClientTextareaWrapper>
      <ClientTextareaWrapper>
        <ClientInfoTextAreaLabel>
          <span>Any other inquiries?</span>
        </ClientInfoTextAreaLabel>
        <ClientInfoTextarea
          name='inquiry'
          placeholder='Please leave any inquiries/comment here.'
          onChange={onChangeHandler}
          value={orderListState.inquiry}
          rows={3}
        />
      </ClientTextareaWrapper>
    </OptionWrapper>
  );
};
