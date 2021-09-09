import React, { useEffect } from 'react';
import { userInfo } from '../../store/userInfoSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { UserInfoInterface } from '../../interface/UserInfoInterface';
import {
  Container,
  Wrapper,
  CheckIcon,
  NameTitle,
  DescriptionText,
  MsgTitle,
  ConfirmLink,
} from './CustomCakeConfirmPageElements';
import { CustomOrderEnum } from '../../interface/OrderProgressInterface';
import { update } from '../../store/orderProgressSlice';

interface Props {}

export const CustomCakeConfirm = (props: Props) => {
  const userInfoState = useAppSelector<UserInfoInterface>(userInfo);
  const dispatch = useAppDispatch();

  /* When confirm page closed, reset order progress */
  useEffect(() => {
    return () => {
      dispatch(
        update({
          type: 'customOrder',
          value: CustomOrderEnum.checkout,
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
          We will sent you an email for the detail. Thank you for using Baking
          Bunny.
        </DescriptionText>
        <ConfirmLink to='/'>Home</ConfirmLink>
      </Wrapper>
    </Container>
  );
};
