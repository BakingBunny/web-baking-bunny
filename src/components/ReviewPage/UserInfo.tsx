import React from 'react';
import { userInfo } from '../../store/userInfoSlice';
import { orderList } from '../../store/orderListSlice';
import { useAppSelector } from '../../store/hooks';
import { UserInfoInterface } from '../../interface/UserInfoInterface';
import { UserInfoText } from './ReviewPageElements';
import { OrderListInterface } from '../../interface/OrderListInterface';
import formatCurrency from '../../utils/formatCurrency';

interface Props {}

export const UserInfo = (props: Props) => {
  const userInfoState = useAppSelector<UserInfoInterface>(userInfo);
  const orderListState = useAppSelector<OrderListInterface>(orderList);

  return (
    <>
      <UserInfoText>
        {userInfoState.firstname} {userInfoState.lastname}
      </UserInfoText>
      <UserInfoText>{userInfoState.email}</UserInfoText>
      <UserInfoText>{userInfoState.phone}</UserInfoText>
      <UserInfoText>Allergies: {userInfoState.allergy}</UserInfoText>
      <UserInfoText>Inquiries: {userInfoState.inquiry}</UserInfoText>
      <br />
      <UserInfoText>
        <b>{orderListState.isDelivery ? 'DELIVERY' : 'PICK UP'}</b>
      </UserInfoText>
      <UserInfoText>
        {orderListState.pickupDeliveryDate &&
          orderListState.pickupDeliveryDate.toDateString()}
      </UserInfoText>
      <br />

      {orderListState.isDelivery && orderListState.deliveryFee && (
        <>
          <UserInfoText>
            Subtotal: {formatCurrency(orderListState.subtotal)}
          </UserInfoText>
          <UserInfoText>
            Delivery Fee: {formatCurrency(orderListState.deliveryFee)}
          </UserInfoText>
        </>
      )}
      <UserInfoText>
        <b>
          TOTAL:{' '}
          {orderListState.deliveryFee
            ? formatCurrency(
                orderListState.subtotal + orderListState.deliveryFee
              )
            : formatCurrency(orderListState.subtotal)}
        </b>
      </UserInfoText>
    </>
  );
};
