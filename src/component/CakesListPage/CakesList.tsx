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
  SizeTitle,
  SizeWrapper,
  Size,
  DetailBtn,
  OrderNowBtn,
} from './CakesListElements';
import { Link } from 'react-router-dom';
import cakesList from './cakesList.json';

interface Props {}

export const CakesList = (props: Props) => {
  return (
    <>
      <Container>
        <Wrapper>
          <Title>CAKES</Title>
          <CardWrapper>
            {cakesList.map((cake) => (
              // <Card>
              <Card to={`/cake/${cake.id}`}>
                <Image src={`./img/cakes/${cake.image}`} alt={cake.name} />
                <Detail>
                  <CakeName>{cake.name}</CakeName>
                  <Price>${cake.price}</Price>
                  {/* <SizeTitle>Sizes</SizeTitle> */}
                </Detail>
                <OrderNowBtn>Order Now</OrderNowBtn>
              </Card>
              // </Card>
            ))}
          </CardWrapper>
        </Wrapper>
      </Container>
    </>
  );
};
