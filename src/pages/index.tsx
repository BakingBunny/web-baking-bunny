import React from 'react';
import { Main } from '../components/MainPage';

interface Props {}

export const HomePage = (props: Props) => {
  window.scrollTo(0, 0);

  return (
    <div>
      <Main />
    </div>
  );
};
