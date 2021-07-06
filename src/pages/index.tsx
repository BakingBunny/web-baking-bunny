import React from 'react';
import { Welcome } from '../component/MainPage';

interface Props {}

export const HomePage = (props: Props) => {
  return (
    <div>
      <Welcome />
    </div>
  );
};
