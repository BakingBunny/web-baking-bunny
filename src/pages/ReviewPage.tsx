import React from 'react';
import Review from '../components/ReviewPage';
import { useReviewValid } from '../hooks/useValidation';
import { NotFoundPage } from './NotFoundPage';

interface Props {}

export const ReviewPage = (props: Props) => {
  window.scrollTo(0, 0);
  const isValid: boolean = useReviewValid();

  return isValid ? <Review /> : <NotFoundPage />;
};
