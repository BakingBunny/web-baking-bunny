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
import { CheckOutInterface } from '../../interface/CheckOutInterface';

interface Props {}

export const ClientInformation = (props: Props) => {
  const {
    register,
    // control,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckOutInterface>();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  return (
    <ClientInfoForm onSubmit={handleSubmit(onSubmit)}>
      <ClientInputWrapper>
        <ClientInfoInput
          type='text'
          // required
          {...register('firstName', {
            required: 'This is required',
            maxLength: { value: 30, message: 'Max length exceeded' },
          })}
        />
        <ClientInfoLabel>
          <span>First name</span>
        </ClientInfoLabel>
      </ClientInputWrapper>
      {errors.firstName && (
        <ClientInfoErrorMsg>{errors.firstName.message}</ClientInfoErrorMsg>
      )}
      <ClientInputWrapper>
        <ClientInfoInput
          type='text'
          // required
          {...register('lastName', {
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
          {...register('mobileNumber', {
            required: 'This is required',
            minLength: 6,
            maxLength: { value: 15, message: 'Max length exceeded' },
          })}
        />
        <ClientInfoLabel>
          <span>Mobile number</span>
        </ClientInfoLabel>
      </ClientInputWrapper>
      <textarea {...register('allergy', {})} placeholder='Allergy' />
      <input type='text' placeholder='Address' {...register('address', {})} />
      <input
        type='text'
        placeholder='postalCode'
        {...register('postalCode', {})}
      />
      <textarea {...register('comment', {})} />

      {/* {errors.length > 0 && <div>{errors}</div>} */}
      <input type='submit' />
      {/* <DevTool control={control} /> */}
    </ClientInfoForm>
  );
};
