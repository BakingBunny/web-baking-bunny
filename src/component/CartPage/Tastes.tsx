import React from 'react';
import { CartState } from '../../interface/CartState';
import { TastesSelect } from './CartPageElements';

interface Props {
  item: CartState;
  updateHandler: any; //TODO: specify later}
}

export const Tastes = (props: Props) => {
  const { item } = props;

  return (
    <TastesSelect
      onChange={(e) => props.updateHandler(item.id, 'tastes', e.target.value)}
      value={item.tastes}
    >
      {item.product?.tastes.map((taste) => (
        <option key={taste} value={taste}>
          {taste.replaceAll('-', ' ')}
        </option>
      ))}
    </TastesSelect>
  );
};
