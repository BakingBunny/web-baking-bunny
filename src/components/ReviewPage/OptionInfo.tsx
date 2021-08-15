import React from 'react';
import { userInfo } from '../../store/userInfoSlice';
import { orderList } from '../../store/orderListSlice';
import { useAppSelector } from '../../store/hooks';
import { UserInfoInterface } from '../../interface/UserInfoInterface';
import {
  OptionInfoContainer,
  FlexWrapper,
  OptionInfoText,
  GridWrapper,
  TotalWrapper,
  TextLeft,
  TextRight,
} from './ReviewPageElements';
import { OrderListInterface } from '../../interface/OrderListInterface';
import formatCurrency from '../../utils/formatCurrency';

interface Props {}

export const OptionInfo = (props: Props) => {
  const userInfoState = useAppSelector<UserInfoInterface>(userInfo);
  const orderListState = useAppSelector<OrderListInterface>(orderList);

  return (
    <OptionInfoContainer>
      <FlexWrapper>
        <OptionInfoText>
          {userInfoState.firstname} {userInfoState.lastname}
        </OptionInfoText>
        <OptionInfoText>{userInfoState.email}</OptionInfoText>
        <OptionInfoText>{userInfoState.phone}</OptionInfoText>
        {orderListState.isDelivery && (
          <>
            <OptionInfoText>{userInfoState.address}</OptionInfoText>
            <OptionInfoText>{userInfoState.postalCode}</OptionInfoText>
          </>
        )}
      </FlexWrapper>
      <GridWrapper>
        <TextLeft>
          <b>Allergies:</b>
        </TextLeft>
        <TextLeft>{userInfoState.allergy}</TextLeft>
        <TextLeft>
          <b>Inquiries:</b>
        </TextLeft>
        <TextLeft>{userInfoState.inquiry}</TextLeft>
      </GridWrapper>
      <FlexWrapper>
        <OptionInfoText>
          <b>{orderListState.isDelivery ? 'DELIVERY' : 'PICK UP'}</b>
        </OptionInfoText>
        {orderListState.isDelivery && (
          <OptionInfoText>
            {userInfoState.address}
            {', '}
            {userInfoState.postalCode}
          </OptionInfoText>
        )}
        <OptionInfoText>
          {orderListState.pickupDeliveryDate &&
            orderListState.pickupDeliveryDate.toDateString()}
        </OptionInfoText>
        <OptionInfoText>
          {orderListState.pickupDeliveryDate &&
            orderListState.pickupDeliveryDate.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
        </OptionInfoText>
      </FlexWrapper>
      <TotalWrapper>
        {orderListState.isDelivery && orderListState.deliveryFee && (
          <>
            <TextLeft>Subtotal: </TextLeft>
            <TextRight>{formatCurrency(orderListState.subtotal)}</TextRight>
            <TextLeft>Delivery Fee: </TextLeft>
            <TextRight>{formatCurrency(orderListState.deliveryFee)}</TextRight>
          </>
        )}
        <TextLeft>
          <b>TOTAL:</b>
        </TextLeft>
        <TextRight>
          <b>
            {orderListState.deliveryFee
              ? formatCurrency(
                  orderListState.subtotal + orderListState.deliveryFee
                )
              : formatCurrency(orderListState.subtotal)}
          </b>
        </TextRight>
      </TotalWrapper>
    </OptionInfoContainer>
  );
};
