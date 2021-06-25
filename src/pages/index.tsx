import React from 'react';
import { Welcome } from '../component/MainPage/Welcome';

interface Props {}

export const HomePage = (props: Props) => {
  return (
    <div>
      <Welcome />
    </div>
  );
};
