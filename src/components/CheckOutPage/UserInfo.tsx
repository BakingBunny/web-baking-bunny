import React from 'react';
import { userInfo, update } from '../../store/userInfoSlice';
// import { orderList } from '../../store/orderListSlice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { UserInfoInterface } from '../../interface/UserInfoInterface';
import {
  OptionWrapper,
  ClientInputWrapper,
  ClientInfoInput,
  ClientInfoLabel,
  // ClientInfoErrorMsg,
  CheckOutQuestion,
  // SubmitBtn,
} from './CheckoutPageElements';
// import { OrderListInterface } from '../../interface/OrderListInterface';

interface Props {}

export const UserInfo = (props: Props) => {
  const userInfoState = useAppSelector<UserInfoInterface>(userInfo);
  // const orderListState = useAppSelector<OrderListInterface>(orderList);
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
    <OptionWrapper>
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
          <span>Email or Instagram ID</span>
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
      <ClientInputWrapper>
        <ClientInfoInput
          type='text'
          name='allergy'
          onChange={onChangeHandler}
          value={userInfoState.allergy}
          required
        />
        <ClientInfoLabel>
          <span>Any food allergies?</span>
        </ClientInfoLabel>
      </ClientInputWrapper>
      <ClientInputWrapper>
        <ClientInfoInput
          type='text'
          name='inquiry'
          onChange={onChangeHandler}
          value={userInfoState.inquiry}
          required
        />
        <ClientInfoLabel>
          <span>Any other inquiries?</span>
        </ClientInfoLabel>
      </ClientInputWrapper>
    </OptionWrapper>
  );
};
