import React from 'react';
import { Product } from '../../interface/Product';
import { PriceWrapper } from './ProductDetailElements';
import formatCurrency from '../../utils';

interface Props {
  productType: string;
  selectedProduct: Product;
}

export const Price = (props: Props) => {
  const { selectedProduct, productType } = props;

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
        productType === '/cakes' && selectedProduct.price !== 0
          ? formatCurrency(selectedProduct.price * 1.2) // cake 8 inch price
          : selectedProduct.item_name === 'Dacquoise-Set'
          ? '5-Piece' // dacquoise set piece
          : '1-Piece' // dacquoise piece
      }
    </PriceWrapper>
  );
};
