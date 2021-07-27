import React from 'react';
import { CartInterface } from '../../interface/CartInterface';
import { PriceWrapper } from './CartPageElements';
import formatCurrency from '../../utils';

interface Props {
  item: CartInterface;
}

export const Price = (props: Props) => {
  const { item } = props;

  return (
    <PriceWrapper>
      {
        item.product.price === 0
          ? 'Various' // custum cakes
          : item.cakeSizeId === 1 || item.cakeSizeId === 6
          ? formatCurrency(item.product.price) //regular cakes and dacquoise
          : formatCurrency(item.product.price * 1.2) // cake 8 inch price
      }
      {/* {
        item.product?.type === 'cake' && item.product?.price !== 0
          ? formatCurrency(item.product?.price * 1.2) // cake 8 inch price          
      } */}
      {item.product.productName === 'Dacquoise-Set'
        ? ' / 5-Piece' // dacquoise set piece
        : ''}
    </PriceWrapper>
  );
};
