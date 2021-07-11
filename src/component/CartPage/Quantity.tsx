import React from 'react';
import { CartState } from '../../interface/CartState';
import {
  CakeQty,
  QtyMinusBtn,
  QtyPlusBtn,
  QtyWrapper,
} from '../ProductDetailPage/ProductDetailElements';
import { CartUpdate } from '../../interface/CartUpdate';

interface Props {
  item: CartState;
  updateHandler: any; //TODO: specify later
}

export const Quantity = (props: Props) => {
  const { item } = props;

  return (
    <QtyWrapper>
      <QtyMinusBtn
        onClick={() => props.updateHandler(item.index, 'qty', item.qty - 1)}
        disabled={item.qty <= 1}
      >
        -
      </QtyMinusBtn>
      <CakeQty>{item.qty}</CakeQty>
      <QtyPlusBtn
        onClick={() => props.updateHandler(item.index, 'qty', item.qty + 1)}
        disabled={item.qty >= 9}
      >
        +
      </QtyPlusBtn>
    </QtyWrapper>
  );
};
