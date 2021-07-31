import React from 'react';
import {
  ClientInfoContainer,
  ClientInputWrapper,
  ClientInfoInput,
  ClientInfoLabel,
  ClientInfoErrorMsg,
  CheckOutQuestion,
  SubmitBtn,
} from './CheckoutPageElements';
import { UserInterface } from '../../interface/UserInterface';

interface Props {}

export const UserInformation = (props: Props) => {
  return (
    <ClientInfoContainer>
      <CheckOutQuestion>Please tell us who you are :)</CheckOutQuestion>
      <ClientInputWrapper>
        <ClientInfoInput type='text' name='firstname' required />
        <ClientInfoLabel>
          <span>First name</span>
        </ClientInfoLabel>
      </ClientInputWrapper>
      <ClientInputWrapper>
        <ClientInfoInput type='text' required />
        <ClientInfoLabel>
          <span>Last name</span>
        </ClientInfoLabel>
      </ClientInputWrapper>
      <ClientInputWrapper>
        <ClientInfoInput type='text' required />
        <ClientInfoLabel>
          <span>Email</span>
        </ClientInfoLabel>
      </ClientInputWrapper>
      <ClientInputWrapper>
        <ClientInfoInput type='tel' required />
        <ClientInfoLabel>
          <span>Phone number</span>
        </ClientInfoLabel>
      </ClientInputWrapper>
      <ClientInputWrapper>
        <ClientInfoInput type='text' required />
        <ClientInfoLabel>
          <span>Address</span>
        </ClientInfoLabel>
      </ClientInputWrapper>
      <ClientInputWrapper>
        <ClientInfoInput type='text' required />
        <ClientInfoLabel>
          <span>Postal Code</span>
        </ClientInfoLabel>
      </ClientInputWrapper>
      {/* <textarea {...register('allergy', {})} placeholder='Allergy' /> */}
    </ClientInfoContainer>
  );
};
