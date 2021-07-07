import React from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
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
  const isMobile: boolean = useWindowSize();

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
          <ProductLink
            to={'/cakes'}
            activeStyle={{
              fontWeight: 'bold',
              borderBottom: '1px solid #fff',
            }}
          >
            CAKE
          </ProductLink>
          <ProductLink
            to={'/dacquoises'}
            activeStyle={{
              fontWeight: 'bold',
              borderBottom: '1px solid #fff',
            }}
          >
            {isMobile ? 'DACQ.' : 'DACQUOISE'}
          </ProductLink>
          <Cart to={'cart'}>
            <CartIcon />
          </Cart>
        </Wrapper>
      </Container>
    </>
  );
};
