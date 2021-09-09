import React from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ConfirmLink, ConformLinkWrapper } from './CheckoutPageElements';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { UserInfoInterface } from '../../interface/UserInfoInterface';
import { userInfo } from '../../store/userInfoSlice';
import { update } from '../../store/orderProgressSlice';
import { CustomOrderEnum } from '../../interface/OrderProgressInterface';
import { CustomCakeInterface } from '../../interface/CustomCakeInterface';
import { customCake } from '../../store/customCakeSlice';

toast.configure();

interface Props {}

export const Confirm = (props: Props) => {
  const customCakeState = useAppSelector<CustomCakeInterface>(customCake);
  const userInfoState = useAppSelector<UserInfoInterface>(userInfo);
  const history = useHistory();
  const dispatch = useAppDispatch();

  const isCheckOutValid = (): boolean => {
    if (customCakeState.isDelivery === undefined) {
      toast('Pickup/delivery option can not be empty.', { type: 'error' });
      return false;
    }

    if (customCakeState.requestDate === undefined) {
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

    if (customCakeState.isDelivery && !userInfoState.postalCode) {
      toast('Postal code can not be empty.', { type: 'error' });
      return false;
    }

    if (customCakeState.isDelivery && !userInfoState.address) {
      toast('Address can not be empty.', { type: 'error' });
      return false;
    }

    if (customCakeState.isDelivery && !userInfoState.city) {
      toast('City not be empty.', { type: 'error' });
      return false;
    }

    return true;
  };

  const onConfirmHandler = () => {
    if (isCheckOutValid()) {
      dispatch(
        update({
          type: 'customOrder',
          value: CustomOrderEnum.review,
        })
      );

      history.push('/custom-cake/review');
    }
  };

  return (
    <ConformLinkWrapper>
      <ConfirmLink onClick={onConfirmHandler}>Confirm</ConfirmLink>
    </ConformLinkWrapper>
  );
};
