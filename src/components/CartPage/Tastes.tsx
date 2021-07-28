import React from 'react';
import { CartInterface } from '../../interface/CartInterface';
import { TastesSelect } from './CartPageElements';

interface Props {
  cartItem: CartInterface;
  updateHandler: (
    id: string, // product id
    option: string, // option name (tasteId)
    value: number // taste id
  ) => void;
}

export const Tastes = (props: Props) => {
  const { cartItem } = props;

  return (
    <TastesSelect
      onChange={(e) =>
        props.updateHandler(cartItem.id, 'tasteId', Number(e.target.value))
      }
      value={cartItem.tasteId}
    >
      {cartItem.product.tasteList.map((taste) => (
        <option key={taste.id} value={taste.id}>
          {taste.tasteName.replaceAll('-', ' ')}
        </option>
      ))}
    </TastesSelect>
  );
};
