import React, { useEffect } from 'react';
import { userInfo } from '../../store/userInfoSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { UserInfoInterface } from '../../interface/UserInfoInterface';
import { update } from '../../store/orderProgressSlice';
import {
  Container,
  Wrapper,
  CheckIcon,
  NameTitle,
  DescriptionText,
  MsgTitle,
  ConfirmLink,
} from './ConfirmPageElements';
import { RegualrOrderEnum } from '../../interface/OrderProgressInterface';

interface Props {}

export const Confirm = (props: Props) => {
  const userInfoState = useAppSelector<UserInfoInterface>(userInfo);
  const dispatch = useAppDispatch();

  /* When confirm page closed, reset order progress */
  useEffect(() => {
    return () => {
      dispatch(
        update({
          type: 'regularOrder',
          value: RegualrOrderEnum.cart,
        })
      );
    };
  }, [dispatch]);

  return (
    <Container>
      <Wrapper>
        <CheckIcon />
        <NameTitle>
          Hey {userInfoState.firstname} {userInfoState.lastname},
        </NameTitle>
        <MsgTitle>Your Order is Confirmed!</MsgTitle>
        <DescriptionText>
          We just sent you a confirmation email. Thank you for using Baking
          Bunny.
        </DescriptionText>
        <ConfirmLink to='/'>Home</ConfirmLink>
      </Wrapper>
    </Container>
  );
};
