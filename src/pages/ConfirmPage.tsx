import React from 'react';
import { Confirm } from '../components/ConfirmPage';

interface Props {}

export const ConfirmPage = (props: Props) => {
  window.scrollTo(0, 0);

  return (
    <>
      <Confirm />
    </>
  );
};
