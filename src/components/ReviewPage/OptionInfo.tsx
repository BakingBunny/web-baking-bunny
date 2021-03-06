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
      </FlexWrapper>
      <GridWrapper>
        <TextLeft>
          <b>Allergies:</b>
        </TextLeft>
        <TextLeft>{orderListState.allergy}</TextLeft>
        <TextLeft>
          <b>Inquiries:</b>
        </TextLeft>
        <TextLeft>{orderListState.inquiry}</TextLeft>
      </GridWrapper>
      <FlexWrapper>
        <OptionInfoText>
          <b>{orderListState.isDelivery ? 'DELIVERY' : 'PICK UP'}</b>
        </OptionInfoText>
        {orderListState.isDelivery && (
          <>
            <OptionInfoText>
              {userInfoState.address}
              {', '}
            </OptionInfoText>
            <OptionInfoText>
              {userInfoState.city}
              {', '}
              {userInfoState.postalCode}
            </OptionInfoText>
          </>
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
        {orderListState.isDelivery && (
          <>
            <TextLeft>Subtotal: </TextLeft>
            <TextRight>{formatCurrency(orderListState.subtotal)}</TextRight>
            <TextLeft>Delivery Fee: </TextLeft>
            <TextRight>
              {orderListState.deliveryFee > 0
                ? formatCurrency(orderListState.deliveryFee)
                : 'FREE'}
            </TextRight>
          </>
        )}
        <TextLeft>
          <b>TOTAL:</b>
        </TextLeft>
        <TextRight>
          <b>
            {formatCurrency(
              orderListState.subtotal + orderListState.deliveryFee
            )}
          </b>
        </TextRight>
      </TotalWrapper>
    </OptionInfoContainer>
  );
};
