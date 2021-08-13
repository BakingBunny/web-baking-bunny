import React from 'react';
import { useParams } from 'react-router-dom';
import { Category } from '../components/CategoryPage';

interface Props {}

interface paramsInterface {
  productCategory: string;
}

export const CategoryPage = (props: Props) => {
  const { productCategory } = useParams<paramsInterface>();

  window.scrollTo(0, 0);

  return (
    <div>
      <Category productCategory={productCategory} selectedProductId={null} />
    </div>
  );
};
