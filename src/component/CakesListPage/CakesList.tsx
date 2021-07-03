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
              <Card to={`/cake/${cake.id}`}>
                <Image
                  src={require(`../../img/cakes/${cake.image}`)?.default}
                  alt={cake.name}
                />
                <Detail>
                  <CakeName>{cake.name}</CakeName>
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
