import React from 'react';
import { Category } from '../components/CategoryPage';

interface Props {}

export const CategoryPage = (props: Props) => {
  window.scrollTo(0, 0);

  return (
    <div>
      <Category />
    </div>
  );
};
