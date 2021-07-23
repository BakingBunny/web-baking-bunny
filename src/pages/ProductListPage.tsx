import React from 'react';
import { ProductList } from '../components/ProductListPage';

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
