import React from 'react';
import { CartState } from '../../interface/CartState';
import { PriceWrapper } from './CartPageElements';
import formatCurrency from '../../utils';

interface Props {
  item: CartState;
}

export const Price = (props: Props) => {
  const { item } = props;

  return (
    <PriceWrapper>
      {
        item.product?.price === 0
          ? 'Various' // custum cakes
          : item.cakeSize === 1 || item.cakeSize === 6
          ? item.product?.price && formatCurrency(item.product?.price) //regular cakes and dacquoise
          : item.product?.price && formatCurrency(item.product?.price * 1.2) // cake 8 inch price
      }
      {/* {
        item.product?.type === 'cake' && item.product?.price !== 0
          ? formatCurrency(item.product?.price * 1.2) // cake 8 inch price          
      } */}
      {item.product?.item_name === 'Dacquoise-Set'
        ? ' / 5-Piece' // dacquoise set piece
        : ''}
    </PriceWrapper>
  );
};
