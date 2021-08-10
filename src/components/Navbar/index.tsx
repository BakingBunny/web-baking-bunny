import React from 'react';
import { useCountCartItems } from '../../hooks/useCountCartItems';
import { useWindowSize } from '../../hooks/useWindowSize';
import {
  Container,
  Wrapper,
  Logo,
  LogoImg,
  ProductLink,
  Cart,
  CartIcon,
  CountCartItems,
} from './NavbarElements';

interface Props {}

export const Navbar = (props: Props) => {
  const isMobile: boolean = useWindowSize();
  const countCartItems = useCountCartItems();

  return (
    <Container>
      <Wrapper>
        <Logo to={'/'}>
          <LogoImg
            src={require('../../img/logo_no_circle.png')?.default}
            alt='logo_img'
          />
        </Logo>
        <ProductLink
          to={'/product/cakes'}
          activeStyle={{
            fontWeight: 'bold',
            borderBottom: '1px solid #fff',
          }}
        >
          CAKE
        </ProductLink>
        <ProductLink
          to={'/product/dacquoises'}
          activeStyle={{
            fontWeight: 'bold',
            borderBottom: '1px solid #fff',
          }}
        >
          {isMobile ? 'DACQ.' : 'DACQUOISE'}
        </ProductLink>
        <Cart to={'/cart'}>
          <CartIcon />
          {countCartItems ? (
            <CountCartItems>
              <div>{countCartItems}</div>
            </CountCartItems>
          ) : (
            ''
          )}
        </Cart>
      </Wrapper>
    </Container>
  );
};
