import React from 'react';
import { useParams } from 'react-router-dom';
import { Category } from '../components/CategoryPage';

interface Props {}

interface paramsInterface {
  categoryId: string;
}

export const CategoryPage = (props: Props) => {
  const { categoryId } = useParams<paramsInterface>();

  window.scrollTo(0, 0);

  return (
    <div>
      <Category categoryId={categoryId} selectedProductId={null} />
    </div>
  );
};
