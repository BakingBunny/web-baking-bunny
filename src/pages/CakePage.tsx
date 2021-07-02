import React from 'react';
import { CakeDetail } from '../component/CakePage/CakeDetail';

interface Props {
  match: {
    params: {
      id: string;
    };
  };
}

export const CakePage = (props: Props) => {
  return (
    <>
      <CakeDetail id={props.match.params.id} />
    </>
  );
};
