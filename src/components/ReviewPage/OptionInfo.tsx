import React from 'react';
import { userInfo } from '../../store/userInfoSlice';
import { orderList } from '../../store/orderListSlice';
import { useAppSelector } from '../../store/hooks';
import { UserInfoInterface } from '../../interface/UserInfoInterface';
import {
  OptionInfoContainer,
  OptionInfoWrapper,
  OptionInfoText,
} from './ReviewPageElements';
import { OrderListInterface } from '../../interface/OrderListInterface';
import formatCurrency from '../../utils/formatCurrency';

interface Props {}

export const OptionInfo = (props: Props) => {
  const userInfoState = useAppSelector<UserInfoInterface>(userInfo);
  const orderListState = useAppSelector<OrderListInterface>(orderList);

  return (
    <OptionInfoContainer>
      <OptionInfoWrapper>
        <OptionInfoText>
          {userInfoState.firstname} {userInfoState.lastname}
        </OptionInfoText>
        <OptionInfoText>{userInfoState.email}</OptionInfoText>
        <OptionInfoText>{userInfoState.phone}</OptionInfoText>
        <OptionInfoText>Allergies: {userInfoState.allergy}</OptionInfoText>
        <OptionInfoText>Inquiries: {userInfoState.inquiry}</OptionInfoText>
      </OptionInfoWrapper>
      <OptionInfoWrapper>
        <OptionInfoText>
          <b>{orderListState.isDelivery ? 'DELIVERY' : 'PICK UP'}</b>
        </OptionInfoText>
        <OptionInfoText>
          {orderListState.pickupDeliveryDate &&
            orderListState.pickupDeliveryDate.toDateString()}
        </OptionInfoText>
      </OptionInfoWrapper>
      <OptionInfoWrapper>
        {orderListState.isDelivery && orderListState.deliveryFee && (
          <>
            <OptionInfoText>
              Subtotal: {formatCurrency(orderListState.subtotal)}
            </OptionInfoText>
            <OptionInfoText>
              Delivery Fee: {formatCurrency(orderListState.deliveryFee)}
            </OptionInfoText>
          </>
        )}
        <OptionInfoText>
          <b>
            TOTAL:{' '}
            {orderListState.deliveryFee
              ? formatCurrency(
                  orderListState.subtotal + orderListState.deliveryFee
                )
              : formatCurrency(orderListState.subtotal)}
          </b>
        </OptionInfoText>
      </OptionInfoWrapper>
    </OptionInfoContainer>
  );
};
