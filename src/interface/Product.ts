import React from 'react';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  tastes: string[];
  productImage: string;
  categoryId: number;
}
