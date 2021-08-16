import React from 'react';
import { CartInterface } from '../../interface/CartInterface';
import { PriceWrapper } from './CartPageElements';
import formatCurrency from '../../utils/formatCurrency';

interface Props {
  cartItem: CartInterface;
}

export const Price = (props: Props) => {
  const { cartItem } = props;

  return (
    <PriceWrapper>
      {
        cartItem.product.price === 0
          ? 'Various' // custum cakes
          : cartItem.product.categoryId === 2 || cartItem.sizeId === 1
          ? formatCurrency(cartItem.product.price) //regular cakes and dacquoise
          : formatCurrency(cartItem.product.price * 1.2) // cake 8 inch price
      }
      {cartItem.product.productId === 30 && // dacquoise combo ?
        ' / 5-Piece'}
    </PriceWrapper>
  );
};
