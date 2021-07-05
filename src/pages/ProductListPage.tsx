import React from 'react';
import { ProductList } from '../component/ProductListPage/ProductList';

interface Props {
  match: {
    path: string;
  };
}

export const ProductListPage = (props: Props) => {
  return (
    <div>
      <ProductList productType={props.match.path} />
    </div>
  );
};
