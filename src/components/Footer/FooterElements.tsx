import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

export const Container = styled.div`
  /* align-self: end; */
  align-content: flex-end;
  background: #133853;
  color: #fff;
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  box-shadow: 0px 7px 10px -4px rgba(0, 0, 0, 0.43);
  position: fixed;
  bottom: 0;

  @media screen and (max-width: 960px) {
    position: static;
    bottom: 0;
  }
`;

export const Wrapper = styled.div`
  height: 80%;
  width: 90%;
  display: grid;
  /* justify-content: center; */
  align-content: center;
  grid-template-columns: 1fr 20% 20% 20%;
`;

export const Logo = styled(NavLink)`
  height: 50px;
  width: 50px;
`;

export const LogoImg = styled.img`
  height: 100%;
  /* scale: 2; */
  /* border-radius: solid 1px #fff; */
`;

export const ProductLink = styled(NavLink)`
  font-size: 1.2rem;
  text-decoration: none;
  justify-self: center;
  align-self: center;
  color: #fff;
  letter-spacing: 2px;
  font-family: 'Otomanopee One', sans-serif;

  @media screen and (max-width: 960px) {
    letter-spacing: 0;
  }
`;

export const Cart = styled(NavLink)`
  font-size: 2rem;
  justify-self: center;
  align-self: center;
`;

export const CartIcon = styled(FaShoppingCart)`
  transform: translateY(2px);
  color: #fff;
`;
