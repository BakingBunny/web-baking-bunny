import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

export const Container = styled.div`
  background: #133853;
  color: #fff;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
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
  font-family: 'Otomanopee One', sans-serif;
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
