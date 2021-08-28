import React, { useCallback } from 'react';
import { customCake, update } from '../../store/customCakeSlice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { CustomCakeInterface } from '../../interface/CustomCakeInterface';
import {
  OptionWrapper,
  ClientTextareaWrapper,
  ClientInfoTextarea,
  ClientInfoTextAreaLabel,
  CheckOutQuestion,
} from './CheckoutPageElements';

interface Props {}

export const RequestDescription = (props: Props) => {
  const customCakeState = useAppSelector<CustomCakeInterface>(customCake);
  const dispatch = useAppDispatch();

  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
      dispatch(
        update({
          name: e.target.name,
          value: e.target.value,
        })
      );
    },
    [dispatch]
  );

  return (
    <OptionWrapper>
      <CheckOutQuestion>Request Description</CheckOutQuestion>
      <ClientTextareaWrapper>
        <ClientInfoTextAreaLabel>
          <span>Request Description</span>
        </ClientInfoTextAreaLabel>
        <ClientInfoTextarea
          name='requestDescription'
          placeholder='If you have any food allergies, please leave it here.'
          onChange={onChangeHandler}
          value={customCakeState.requestDescription}
          rows={5}
        />
      </ClientTextareaWrapper>
    </OptionWrapper>
  );
};
