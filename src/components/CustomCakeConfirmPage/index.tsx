import React from 'react';
import { userInfo } from '../../store/userInfoSlice';
import { useAppSelector } from '../../store/hooks';
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

interface Props {}

export const CustomCakeConfirm = (props: Props) => {
  const userInfoState = useAppSelector<UserInfoInterface>(userInfo);

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
