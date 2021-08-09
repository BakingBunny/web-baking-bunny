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
} from './ConfirmPageElements';

interface Props {}

export const Confirm = (props: Props) => {
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
          We just sent you a confirmation email. Thank you for using Babking
          Bunny.
        </DescriptionText>
        <ConfirmLink to='/'>Home</ConfirmLink>
      </Wrapper>
    </Container>
  );
};
