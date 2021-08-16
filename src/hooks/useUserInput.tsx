import React, { useCallback } from 'react';
import { update } from '../store/userInfoSlice';
import { useAppDispatch } from '../store/hooks';
import {
  ClientInputWrapper,
  ClientInfoInput,
  ClientInfoLabel,
} from '../components/CheckOutPage/CheckoutPageElements';

export const useUserInput = (
  name: string,
  label: string,
  value: string,
  type: string = 'text',
  placeholder: string = '',
  isRequired: boolean = true
) => {
  const dispatch = useAppDispatch();

  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
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
    <ClientInputWrapper>
      <ClientInfoInput
        type={type}
        name={name}
        onChange={onChangeHandler}
        value={value}
        placeholder={placeholder}
        required={isRequired}
      />
      <ClientInfoLabel>
        <span>{label}</span>
      </ClientInfoLabel>
    </ClientInputWrapper>
  );
};
