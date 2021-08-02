import React from 'react';
import { userInfo, update } from '../../store/userInfoSlice';
// import { orderList } from '../../store/orderListSlice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
  ClientInfoContainer,
  ClientInputWrapper,
  ClientInfoInput,
  ClientInfoLabel,
  // ClientInfoErrorMsg,
  CheckOutQuestion,
  // SubmitBtn,
} from './CheckoutPageElements';

interface Props {}

export const UserInfo = (props: Props) => {
  const userInfoState = useAppSelector(userInfo);
  // const orderListState = useAppSelector(orderList);
  const dispatch = useAppDispatch();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(
      update({
        name: e.target.name,
        value: e.target.value,
      })
    );
  };

  return (
    <ClientInfoContainer>
      <CheckOutQuestion>Please tell us who you are :)</CheckOutQuestion>
      <ClientInputWrapper>
        <ClientInfoInput
          type='text'
          name='firstname'
          onChange={onChangeHandler}
          value={userInfoState.firstname}
          required
        />
        <ClientInfoLabel>
          <span>First name</span>
        </ClientInfoLabel>
      </ClientInputWrapper>
      <ClientInputWrapper>
        <ClientInfoInput
          type='text'
          name='lastname'
          onChange={onChangeHandler}
          value={userInfoState.lastname}
          required
        />
        <ClientInfoLabel>
          <span>Last name</span>
        </ClientInfoLabel>
      </ClientInputWrapper>
      <ClientInputWrapper>
        <ClientInfoInput
          type='text'
          name='email'
          onChange={onChangeHandler}
          value={userInfoState.email}
          required
        />
        <ClientInfoLabel>
          <span>Email</span>
        </ClientInfoLabel>
      </ClientInputWrapper>
      <ClientInputWrapper>
        <ClientInfoInput
          type='tel'
          name='phone'
          onChange={onChangeHandler}
          value={userInfoState.phone}
          required
        />
        <ClientInfoLabel>
          <span>Phone number</span>
        </ClientInfoLabel>
      </ClientInputWrapper>
      {/* {orderListState.isDelivery && (
        <>
          <ClientInputWrapper>
            <ClientInfoInput
              type='text'
              name='address'
              onChange={onChangeHandler}
              value={userInfoState.address}
              required={orderListState.isDelivery}
            />
            <ClientInfoLabel>
              <span>Address</span>
            </ClientInfoLabel>
          </ClientInputWrapper>
          <ClientInputWrapper>
            <ClientInfoInput
              type='text'
              name='city'
              onChange={onChangeHandler}
              value={userInfoState.city}
              required={orderListState.isDelivery}
            />
            <ClientInfoLabel>
              <span>City</span>
            </ClientInfoLabel>
          </ClientInputWrapper>
          <ClientInputWrapper>
            <ClientInfoInput
              type='text'
              name='postalCode'
              onChange={onChangeHandler}
              value={userInfoState.postalCode}
              required={orderListState.isDelivery}
            />
            <ClientInfoLabel>
              <span>Postal Code</span>
            </ClientInfoLabel>
          </ClientInputWrapper>
        </>
      )} */}
      {/* <textarea {...register('allergy', {})} placeholder='Allergy' /> */}
    </ClientInfoContainer>
  );
};
