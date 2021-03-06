import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

export const Container = styled.header`
  background: #133853;
  color: #fff;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  box-shadow: 0px 7px 10px -4px rgba(0, 0, 0, 0.43);
`;

export const Wrapper = styled.nav`
  height: 80%;
  width: 90%;
  display: grid;
  align-content: center;
  grid-template-columns: 1fr 20% 20% 20%;
`;

export const Logo = styled(NavLink)`
  height: 50px;
  width: 50px;
`;

export const LogoImg = styled.img`
  height: 100%;
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
  position: relative;
`;

export const CartIcon = styled(FiShoppingCart)`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-50%, 30%);
  font-size: 2rem;
  color: #fff;
`;

export const CountCartItems = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background: #f4ba29;
  width: 25px;
  height: 25px;
  border-radius: 20px;
  animation: itemAdded 0.2s ease-out;

  @keyframes itemAdded {
    0% {
      scale: 0.1;
    }
    90% {
      scale: 1.2;
    }
    100% {
      scale: 1;
    }
  }

  div {
    margin: auto;
    line-height: 25px;
    width: 25px;
    font-size: 1rem;
    text-align: center;
  }
`;
