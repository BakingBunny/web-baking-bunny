import React from 'react';
import Review from '../components/ReviewPage';

interface Props {}

export const ReviewPage = (props: Props) => {
  window.scrollTo(0, 0);

  return (
    <>
      <Review />
    </>
  );
};
