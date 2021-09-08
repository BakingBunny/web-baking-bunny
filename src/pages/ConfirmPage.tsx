import React from 'react';
import { Confirm } from '../components/ConfirmPage';
import { useConfirm } from '../hooks/useValidation';
import { NotFoundPage } from './NotFoundPage';

interface Props {}

export const ConfirmPage = (props: Props) => {
  window.scrollTo(0, 0);
  const isValid: boolean = useConfirm();

  return isValid ? <Confirm /> : <NotFoundPage />;
};
