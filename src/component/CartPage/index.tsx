import React from 'react';
import { products, update } from '../../store/cartSlice';
import { useAppSelector } from '../../store/hooks';
import { useAppDispatch } from '../../store/hooks';
import { remove } from '../../store/cartSlice';
import { CartState } from '../../interface/CartState';
import {
  Container,
  Title,
  Wrapper,
  CardWrapper,
  Card,
  Image,
} from './CartPageElements';
import {
  SizeBtn,
  SizeWrapper,
} from '../ProductDetailPage/ProductDetailElements';
import { Quantity } from './Quantity';

interface Props {}

export const Cart = (props: Props) => {
  const productsList = useAppSelector(products);
  const dispatch = useAppDispatch();

  const updateHandler = (
    index: number,
    option: string,
    value: number | string
  ) => {
    dispatch(
      update({
        index: index,
        option: option,
        value: value,
      })
    );
  };

  return (
    <Container>
      <Title>Shopping Cart</Title>
      <Wrapper>
        <CardWrapper>
          {productsList.map((item: CartState) => (
            <Card key={item.index}>
              <Image />
              <p>{item.index}</p>
              <p>{item.product?.item_name}</p>
              <p>{item.qty}</p>
              <p>{item.tastes}</p>
              <p>{item.cakeSize}</p>
              <Quantity item={item} updateHandler={updateHandler} />

              <button onClick={() => dispatch(remove(item.index))}>
                Delete
              </button>
              {/* <button onClick={() => dispatch(remove(item.id))}>Edit</button> */}
            </Card>
          ))}
        </CardWrapper>
      </Wrapper>
    </Container>
  );
};
