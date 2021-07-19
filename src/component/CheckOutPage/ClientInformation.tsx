import React from 'react';
import { useForm } from 'react-hook-form';
// import { DevTool } from '@hookform/devtools';

interface Props {}

export const ClientInformation = (props: Props) => {
  const {
    register,
    // control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type='text'
        placeholder='First name'
        {...register('firstName', { required: true, maxLength: 2 })}
      />
      <input
        type='text'
        placeholder='Last name'
        {...register('lastName', { required: true, maxLength: 100 })}
      />
      <input
        type='text'
        placeholder='Email'
        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type='tel'
        placeholder='Mobile number'
        {...register('mobileNumber', {
          required: true,
          minLength: 6,
          maxLength: 12,
        })}
      />
      <textarea {...register('allergy', {})} placeholder='Allergy' />
      <input type='text' placeholder='Address' {...register('Address', {})} />
      <input
        type='text'
        placeholder='postalCode'
        {...register('postalCode', {})}
      />
      <textarea {...register('comment', {})} />

      {errors.length > 0 && <div>{errors}</div>}
      <input type='submit' />
      {/* <DevTool control={control} /> */}
    </form>
  );
};
