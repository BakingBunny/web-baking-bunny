import React from 'react';
import { ProductDetail } from '../component/ProductDetailPage';

interface Props {
  match: {
    params: {
      id: string;
    };
  };
}

export const ProductPage = (props: Props) => {
  return (
    <>
      <ProductDetail id={props.match.params.id} />
    </>
  );
};
