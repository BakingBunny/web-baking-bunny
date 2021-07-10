import React from 'react';
import { products } from '../../store/cartSlice';
import { useAppSelector } from '../../store/hooks';
import { useAppDispatch } from '../../store/hooks';
import { remove } from '../../store/cartSlice';
import {
  Container,
  Title,
  Wrapper,
  CardWrapper,
  Card,
  Image,
} from './CartPageElements';

interface Props {}

export const Cart = (props: Props) => {
  const productsList = useAppSelector(products);
  const dispatch = useAppDispatch();

  return (
    <Container>
      <Title>Shopping Cart</Title>
      <Wrapper>
        <CardWrapper>
          {productsList.map((item) => (
            <Card key={item.id}>
              <Image />
              <p>{item.id}</p>
              <p>{item.productId}</p>
              <p>{item.qty}</p>
              <p>{item.tastes}</p>
              <p>{item.cakeSize}</p>
              <button onClick={() => dispatch(remove(item.id))}>Delete</button>
              {/* <button onClick={() => dispatch(remove(item.id))}>Edit</button> */}
            </Card>
          ))}
        </CardWrapper>
      </Wrapper>
    </Container>
  );
};
