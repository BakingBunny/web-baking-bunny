import React from 'react';
import { userInfo } from '../../store/userInfoSlice';
import { useAppSelector } from '../../store/hooks';
import { UserInfoInterface } from '../../interface/UserInfoInterface';
import {
  OptionInfoContainer,
  FlexWrapper,
  OptionInfoText,
  GridWrapper,
  TextLeft,
} from './ReviewPageElements';
import { CustomCakeInterface } from '../../interface/CustomCakeInterface';
import { customCake } from '../../store/customCakeSlice';

interface Props {}

export const OptionInfo = (props: Props) => {
  const userInfoState = useAppSelector<UserInfoInterface>(userInfo);
  const customCakeState = useAppSelector<CustomCakeInterface>(customCake);

  return (
    <OptionInfoContainer>
      <FlexWrapper>
        {customCakeState.product.cakeTypeList.map(
          (item) =>
            item.id === customCakeState.cakeTypeId && (
              <OptionInfoText key={item.id}>Type: {item.type}</OptionInfoText>
            )
        )}
        {customCakeState.product.tasteList.map(
          (item) =>
            item.id === customCakeState.tasteId && (
              <OptionInfoText key={item.id}>
                Taste: {item.tasteName}
              </OptionInfoText>
            )
        )}
        {customCakeState.product.sizeList.map(
          (item) =>
            item.id === customCakeState.sizeId && (
              <OptionInfoText key={item.id}>
                Size: {item.sizeName}
              </OptionInfoText>
            )
        )}
      </FlexWrapper>
      <GridWrapper>
        {customCakeState.requestDescription && (
          <>
            <TextLeft>
              <b>Request:</b>
            </TextLeft>
            <TextLeft>{customCakeState.requestDescription}</TextLeft>
          </>
        )}
      </GridWrapper>
      <FlexWrapper>
        <OptionInfoText>
          {userInfoState.firstname} {userInfoState.lastname}
        </OptionInfoText>
        <OptionInfoText>{userInfoState.email}</OptionInfoText>
        <OptionInfoText>{userInfoState.phone}</OptionInfoText>
      </FlexWrapper>
      <FlexWrapper>
        <OptionInfoText>
          <b>{customCakeState.isDelivery ? 'DELIVERY' : 'PICK UP'}</b>
        </OptionInfoText>
        {customCakeState.isDelivery && (
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
          {customCakeState.requestDate &&
            customCakeState.requestDate.toDateString()}
        </OptionInfoText>
        <OptionInfoText>
          {customCakeState.requestDate &&
            customCakeState.requestDate.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
        </OptionInfoText>
      </FlexWrapper>
    </OptionInfoContainer>
  );
};
