import React from 'react';
import { CartState } from '../../interface/CartState';

interface Props {
  item: CartState;
  updateHandler: any; //TODO: specify later}
}

export const Tastes = (props: Props) => {
  const { item } = props;

  return (
    <>
      <select
        name='cars'
        id='cars'
        onChange={(e) => props.updateHandler(item.id, 'tastes', e.target.value)}
      >
        {item.product?.tastes.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
};
