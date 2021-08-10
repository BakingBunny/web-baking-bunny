import React from 'react';
import { ProductList } from '../components/ProductListPage';

interface Props {}

export const ProductListPage = (props: Props) => {
  window.scrollTo(0, 0);

  return (
    <div>
      <ProductList />
    </div>
  );
};
