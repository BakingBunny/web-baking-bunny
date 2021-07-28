import React from 'react';
import { useForm } from 'react-hook-form';
import {
  ClientInfoContainer,
  ClientInputWrapper,
  ClientInfoInput,
  ClientInfoLabel,
  ClientInfoErrorMsg,
} from './CheckoutPageElements';
import { UserInterface } from '../../interface/UserInterface';
import { DevTool } from '@hookform/devtools'; //TODO: Delete later

interface Props {}

export const UserInformation = (props: Props) => {
  const {
    register,
    control,
    formState: { errors },
  } = useForm<UserInterface>();
  console.log(errors);

  return (
    <ClientInfoContainer>
      <ClientInputWrapper>
        <ClientInfoInput
          type='text'
          // required
          {...register('firstname', {
            required: 'This is required',
            maxLength: { value: 30, message: 'Max length exceeded' },
          })}
        />
        <ClientInfoLabel>
          <span>First name</span>
        </ClientInfoLabel>
      </ClientInputWrapper>
      {errors.firstname && (
        <ClientInfoErrorMsg>{errors.firstname.message}</ClientInfoErrorMsg>
      )}
      <ClientInputWrapper>
        <ClientInfoInput
          type='text'
          // required
          {...register('lastname', {
            required: 'This is required',
            maxLength: { value: 30, message: 'Max length exceeded' },
          })}
        />
        <ClientInfoLabel>
          <span>Last name</span>
        </ClientInfoLabel>
      </ClientInputWrapper>
      <ClientInputWrapper>
        <ClientInfoInput
          type='text'
          // required
          {...register('email', {
            required: 'This is required',
            pattern: /^\S+@\S+$/i,
            maxLength: { value: 40, message: 'Max length exceeded' },
          })}
        />
        <ClientInfoLabel>
          <span>Email</span>
        </ClientInfoLabel>
      </ClientInputWrapper>
      <ClientInputWrapper>
        <ClientInfoInput
          type='tel'
          // required
          {...register('phone', {
            required: 'This is required',
            minLength: 6,
            maxLength: { value: 15, message: 'Max length exceeded' },
          })}
        />
        <ClientInfoLabel>
          <span>Mobile number</span>
        </ClientInfoLabel>
      </ClientInputWrapper>
      {/* <textarea {...register('allergy', {})} placeholder='Allergy' /> */}
      <input type='text' placeholder='Address' {...register('address', {})} />
      <input
        type='text'
        placeholder='postalCode'
        {...register('postalCode', {
          maxLength: { value: 6, message: 'Max length exceeded' },
        })}
      />
      {/* <textarea {...register('comment', {})} /> */}

      {/* {errors.length > 0 && <div>{errors}</div>} */}
      <input type='submit' />
      <DevTool control={control} placement='bottom-right' />
    </ClientInfoContainer>
  );
};
