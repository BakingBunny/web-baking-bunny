import React, { Dispatch, SetStateAction } from 'react';
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
import { UserInfoInterface } from '../../interface/UserInfoInterface';
import formatCurrency from '../../utils/formatCurrency';

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export const ModalCalcDeliveryFee: React.FC<Props> = ({ setShowModal }) => {
  const orderListState = useAppSelector<OrderListInterface>(orderList);
  const userInfoState = useAppSelector<UserInfoInterface>(userInfo);
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

  const onConfirmhandler = () => {
    setShowModal(false);
  };

  return (
    <ModalWrapper>
      <DeliveryRequirement>
        {'< Note >'}
        <br />
        1. Delivery service is available only for more than $50 purchase between
        1 PM and 4 PM on Saturdays. <br />
        2. The specific time will be noticed with the confirmation of order.
        <br />
        3. Additional delivery fee can range up to $10 by distance.
      </DeliveryRequirement>
      <DeliveryRequirement>
        Please put your postal code below
      </DeliveryRequirement>
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
            <ConfirmBtn onClick={onConfirmhandler}>Confirm</ConfirmBtn>
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
