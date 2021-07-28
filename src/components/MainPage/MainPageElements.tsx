import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mainImage from '../../img/welcome_background.jpg';

export const Container = styled.div`
  height: calc(100vh - 60px - 30px);
  display: grid;
  grid-template-columns: 60% auto;

  @media screen and (max-width: 960px) {
    grid-template-rows: repeat(2, calc((100vh - 60px - 30px) / 2));
    grid-template-columns: 1fr;
  }
`;

export const BackgroundWrapper = styled.div`
  width: 100%;
  background-color: #ffebee;
  position: relative;
`;

export const MainImage = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: unset;
  background-image: url(${mainImage});
  z-index: 1;
  clip-path: polygon(0 0%, 100% 0%, 85% 100%, 0% 100%);

  @media screen and (max-width: 960px) {
    clip-path: polygon(0 0%, 100% 0%, 100% 85%, 0% 100%);
  }
`;

export const LogoMobile = styled.a`
  img {
    height: 130px;
    width: 130px;
    z-index: 2;
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(-15px, 10px);
    background: #133853;
    border-radius: 100px;
    border: 1px solid #fff;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  }
`;

export const Card = styled.div`
  width: 100%;
  background: #ffebee;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 30% 45% 25%;
  grid-template-areas: 'logo-desktop logo-desktop' 'slogan slogan' 'cakebtn dacquoisebtn';
  align-items: center;
  justify-items: center;

  @media screen and (max-width: 960px) {
    grid-template-columns: 50% 50%;
    grid-template-rows: 60% 40%;
    grid-template-areas: 'slogan slogan' 'cakebtn dacquoisebtn';
  }
`;

export const LogoDesktop = styled.a`
  grid-area: logo-desktop;
  display: flex;
  justify-content: center;

  img {
    height: 200px;
    width: 200px;
    background: #133853;
    border-radius: 100px;
    border: 1px solid #fff;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  }
`;

export const Slogan = styled.h2`
  grid-area: slogan;
  text-align: left;
  padding: 20px;
  font-family: 'Indie Flower', cursive;
  font-size: 2rem;
  line-height: 2;

  @media screen and (max-width: 960px) {
    font-size: 1.5rem;
    line-height: 1.5;
  }
`;

const ProductBtn = styled(Link)`
  grid-area: cakebtn;
  border: 0;
  background: #133853;
  color: #fff;
  margin: 20px;
  font-size: 1.3rem;
  border-radius: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  width: clamp(150px, 75%, 200px);
  height: 60px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  font-family: 'Otomanopee One', sans-serif;

  &:hover {
    transform: translateY(-10px);
  }

  @media screen and (max-width: 960px) {
    &:hover {
      transform: translateY(0);
    }
  }
`;

export const CakeBtn = styled(ProductBtn)`
  grid-area: cakebtn;
`;

export const DacquoiseBtn = styled(ProductBtn)`
  grid-area: dacquoisebtn;
`;
