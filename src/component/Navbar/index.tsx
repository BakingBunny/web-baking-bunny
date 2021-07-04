import React from 'react';
import {
  Container,
  Wrapper,
  Logo,
  LogoImg,
  ProductLink,
  Cart,
  CartIcon,
} from './NavbarElements';

interface Props {}

export const Navbar = (props: Props) => {
  return (
    <>
      <Container>
        <Wrapper>
          <Logo to={'/'}>
            <LogoImg
              src={require('../../img/logo_no_circle.png')?.default}
              alt='logo_img'
            />
          </Logo>
          <ProductLink to={'cakes'}>CAKE</ProductLink>
          <ProductLink to={'dacquoises'}>DACQ.</ProductLink>
          <Cart to={'cart'}>
            <CartIcon />
          </Cart>
        </Wrapper>
      </Container>
    </>
  );
};
