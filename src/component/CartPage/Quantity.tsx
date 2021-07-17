import React from 'react';
import { CartInterface } from '../../interface/CartInterface';
import {
  QtyTitle,
  ProductQty,
  CircleBtn,
  QtyWrapper,
} from './CartPageElements';

interface Props {
  item: CartInterface;
  updateHandler: any; //TODO: specify later
}

export const Quantity = (props: Props) => {
  const { item } = props;

  return (
    <QtyWrapper>
      <QtyTitle>Quantity</QtyTitle>
      <CircleBtn
        onClick={() => props.updateHandler(item.id, 'qty', item.qty - 1)}
        disabled={item.qty <= 1}
      >
        -
      </CircleBtn>
      <ProductQty>
        <span>{item.qty}</span>
      </ProductQty>
      {/* {item.qty} */}
      <CircleBtn
        onClick={() => props.updateHandler(item.id, 'qty', item.qty + 1)}
        disabled={item.qty >= 9}
      >
        +
      </CircleBtn>
    </QtyWrapper>
  );
};
