import React from 'react';
import { useForm } from 'react-hook-form';
import {
  ClientInfoForm,
  ClientInputWrapper,
  ClientInfoInput,
  ClientInfoLabel,
  ClientInfoErrorMsg,
} from './CheckoutPageElements';
// import { DevTool } from '@hookform/devtools';
import { UserInterface } from '../../interface/UserInterface';

interface Props {}

export const UserInformation = (props: Props) => {
  const {
    register,
    // control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInterface>();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  return (
    <ClientInfoForm onSubmit={handleSubmit(onSubmit)}>
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
        {...register('postalCode', {})}
      />
      {/* <textarea {...register('comment', {})} /> */}

      {/* {errors.length > 0 && <div>{errors}</div>} */}
      <input type='submit' />
      {/* <DevTool control={control} /> */}
    </ClientInfoForm>
  );
};