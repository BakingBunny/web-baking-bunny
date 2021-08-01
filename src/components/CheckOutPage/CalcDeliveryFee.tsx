import React from 'react';
import { orderList, update } from '../../store/orderListSlice';
// import { userInfo, update } from '../../store/userInfoSlice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
  ClientInfoInput,
  ClientInfoLabel,
  ClientInputWrapper,
  DatesWrapper,
  DeliveryRequirement,
} from './CheckoutPageElements';
import { OrderListInterface } from '../../interface/OrderListInterface';

interface Props {
  closeModal: () => void;
}

export const CalcDeliveryFee: React.FC<Props> = ({ closeModal }) => {
  const orderListState = useAppSelector<OrderListInterface>(orderList);
  const dispatch = useAppDispatch();

  const onChangeHandler = (fee: number): void => {
    dispatch(
      update({
        name: 'deliveryFee',
        value: fee,
      })
    );
    closeModal();
  };

  return (
    <DatesWrapper>
      <DeliveryRequirement>
        {'< Note >'}
        <br />
        1. Delivery service is available only for more than $50 purchase on
        Saturday. <br />
        2. Additional delivery fee can range up to $10 by distance.
      </DeliveryRequirement>
      {/* <ClientInputWrapper>
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
      </ClientInputWrapper> */}
    </DatesWrapper>
  );
};
