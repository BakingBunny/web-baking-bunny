import React from 'react';
import {
  ClientInfoContainer,
  ClientInputWrapper,
  ClientInfoInput,
  ClientInfoLabel,
  // ClientInfoErrorMsg,
} from './CheckoutPageElements';
// import { UserInterface } from '../../interface/UserInterface';

interface Props {}

export const UserInformation = (props: Props) => {
  return (
    <ClientInfoContainer>
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
          <span>Mobile number</span>
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
          <span>postalCode</span>
        </ClientInfoLabel>
      </ClientInputWrapper>
      {/* <textarea {...register('allergy', {})} placeholder='Allergy' /> */}

      <input type='submit' />
    </ClientInfoContainer>
  );
};
