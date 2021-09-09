import React from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ConfirmLink, ConformLinkWrapper } from './CheckoutPageElements';
import { OrderListInterface } from '../../interface/OrderListInterface';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { orderList } from '../../store/orderListSlice';
import { UserInfoInterface } from '../../interface/UserInfoInterface';
import { userInfo } from '../../store/userInfoSlice';
import { update } from '../../store/orderProgressSlice';
import { RegualrOrderEnum } from '../../interface/OrderProgressInterface';

toast.configure();

interface Props {}

export const Confirm = (props: Props) => {
  const orderListState = useAppSelector<OrderListInterface>(orderList);
  const userInfoState = useAppSelector<UserInfoInterface>(userInfo);
  const history = useHistory();
  const dispatch = useAppDispatch();

  const isCheckOutValid = (): boolean => {
    if (orderListState.isDelivery === undefined) {
      toast('Pickup/delivery option can not be empty.', { type: 'error' });
      return false;
    }

    if (orderListState.pickupDeliveryDate === undefined) {
      toast('Pickup/delivery date can not be empty.', { type: 'error' });
      return false;
    }

    if (!userInfoState.firstname) {
      toast('First name can not be empty.', { type: 'error' });
      return false;
    }

    if (!userInfoState.lastname) {
      toast('Last name can not be empty.', { type: 'error' });
      return false;
    }

    if (!userInfoState.email) {
      toast('Email address can not be empty.', { type: 'error' });
      return false;
    }

    if (!userInfoState.phone) {
      toast('Phone number can not be empty.', { type: 'error' });
      return false;
    }

    if (orderListState.isDelivery && !userInfoState.postalCode) {
      toast('Postal code can not be empty.', { type: 'error' });
      return false;
    }

    if (orderListState.isDelivery && !userInfoState.address) {
      toast('Address can not be empty.', { type: 'error' });
      return false;
    }

    if (orderListState.isDelivery && !userInfoState.city) {
      toast('City not be empty.', { type: 'error' });
      return false;
    }

    return true;
  };

  const onConfirmHandler = () => {
    if (isCheckOutValid()) {
      dispatch(
        update({
          type: 'regularOrder',
          value: RegualrOrderEnum.review,
        })
      );

      history.push('/review');
    }
  };

  return (
    <ConformLinkWrapper>
      <ConfirmLink onClick={onConfirmHandler}>Confirm</ConfirmLink>
    </ConformLinkWrapper>
  );
};
