import React from 'react';
import { userInfo, update } from '../../store/userInfoSlice';
// import { orderList } from '../../store/orderListSlice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { UserInfoInterface } from '../../interface/UserInfoInterface';

interface Props {}

export const UserInfo = (props: Props) => {
  const userInfoState = useAppSelector<UserInfoInterface>(userInfo);

  return (
    <>
      {userInfoState.firstname}
      {userInfoState.lastname}
      {userInfoState.email}
      {userInfoState.phone}
      {userInfoState.allergy}
      {userInfoState.inquiry}
    </>
  );
};
