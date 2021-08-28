import React from 'react';
import { CustomCakeConfirm } from '../components/CustomCakeConfirmPage';

interface Props {}

export const CustomCakeConfirmPage = (props: Props) => {
  window.scrollTo(0, 0);

  return (
    <>
      <CustomCakeConfirm />
    </>
  );
};
