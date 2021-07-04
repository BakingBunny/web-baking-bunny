import React from 'react';
import {
  Container,
  Wrapper,
  Title,
  CardWrapper,
  Card,
  Image,
  Detail,
  CakeName,
  Price,
  OrderNowBtn,
} from './CakesListElements';
import cakesList from './cakesList.json';
import formatCurrency from '../../utils';

interface Props {}

export const CakesList = (props: Props) => {
  return (
    <>
      <Container>
        <Wrapper>
          <Title>CAKES</Title>
          <CardWrapper>
            {cakesList.map((cake) => (
              <Card to={`/cake/${cake.item_name}`}>
                <Image
                  src={require(`../../img/${cake.image}`)?.default}
                  alt={cake.item_name}
                />
                <Detail>
                  <CakeName>{cake.item_name}</CakeName>
                  <Price>
                    {formatCurrency(cake.price)} /{' '}
                    {formatCurrency(cake.price * 1.2)}
                  </Price>
                  {/* <SizeTitle>Sizes</SizeTitle> */}
                </Detail>
                <OrderNowBtn>Order Now</OrderNowBtn>
              </Card>
            ))}
          </CardWrapper>
        </Wrapper>
      </Container>
    </>
  );
};
