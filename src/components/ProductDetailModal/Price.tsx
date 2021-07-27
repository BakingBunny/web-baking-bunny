import React from 'react';
import { ProductInterface } from '../../interface/ProductInterface';
import { PriceWrapper } from './ProductDetailElements';
import formatCurrency from '../../utils';

interface Props {
  selectedProduct: ProductInterface;
}

export const Price = (props: Props) => {
  const { selectedProduct } = props;

  return (
    <PriceWrapper>
      {
        selectedProduct.price === 0
          ? 'Various' // custum cakes
          : formatCurrency(selectedProduct.price) //regular cakes and dacquoise
      }
      {
        selectedProduct.price !== 0 && ' / ' // divider
      }
      {
        selectedProduct.categoryId === 1 && selectedProduct.price !== 0
          ? formatCurrency(selectedProduct.price * 1.2) // cake 8 inch price
          : selectedProduct.productName === 'Dacquoise-Set'
          ? '5-Piece' // dacquoise set piece
          : selectedProduct.categoryId === 2 && '1-Piece' // dacquoise piece
      }
    </PriceWrapper>
  );
};
