import React from 'react';
import {
  orderList,
  update as orderListUpdate,
} from '../../store/orderListSlice';
import { userInfo, update as userInfoUpdate } from '../../store/userInfoSlice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
  ClientInfoInput,
  ClientInfoLabel,
  ClientInputWrapper,
  ModalWrapper,
  DeliveryRequirement,
  CheckOutQuestion,
  CheckAddressBtn,
  ConfirmBtn,
} from './CheckoutPageElements';
import { OrderListInterface } from '../../interface/OrderListInterface';
import formatCurrency from '../../utils';

interface Props {
  closeModal: () => void;
}

export const CalcDeliveryFee: React.FC<Props> = ({ closeModal }) => {
  const orderListState = useAppSelector<OrderListInterface>(orderList);
  const userInfoState = useAppSelector(userInfo);
  const dispatch = useAppDispatch();

  // update user info from store
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(
      userInfoUpdate({
        name: e.target.name,
        value: e.target.value,
      })
    );
  };

  // check postal code to calculate delivery fee
  const onClickHandler = (fee: number): void => {
    dispatch(
      orderListUpdate({
        name: 'deliveryFee',
        value: fee,
      })
    );
  };

  return (
    <ModalWrapper>
      <DeliveryRequirement>
        {'< Note >'}
        <br />
        1. Delivery service is available only for more than $50 purchase between
        1PM and 4PM on Saturdays. <br />
        2. The specific time will be noticed with the confirmation of order.
        <br />
        3. Additional delivery fee can range up to $10 by distance.
      </DeliveryRequirement>
      <DeliveryRequirement>Please put your Postal Code</DeliveryRequirement>
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
      <CheckAddressBtn onClick={() => onClickHandler(10)}>
        Check Address
      </CheckAddressBtn>
      {orderListState.deliveryFee !== null && // NULL is initial value
        orderListState.deliveryFee >= 0 && ( // delivery: POSSIBLE
          <>
            <CheckOutQuestion>
              Delivery fee:{' '}
              {orderListState.deliveryFee === 0
                ? 'FREE'
                : formatCurrency(orderListState.deliveryFee)}
            </CheckOutQuestion>
            <DeliveryRequirement>
              Please put specific address to make a correct delivery service.
              <br />
              (ex. 000 0st SW)
            </DeliveryRequirement>
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
            <ConfirmBtn>Confirm</ConfirmBtn>
          </>
        )}
      {orderListState.deliveryFee !== null && // NULL is initial value
        orderListState.deliveryFee < 0 && ( // delivery: IMPOSSIBLE (-1)
          <DeliveryRequirement>
            Sorry, this place is not available.
          </DeliveryRequirement>
        )}
    </ModalWrapper>
  );
};
