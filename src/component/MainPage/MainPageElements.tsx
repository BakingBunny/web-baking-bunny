import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  min-height: calc(100vh - 60px);
  display: grid;
  grid-template-rows: repeat(2, calc((100vh - 60px) / 2));

  /* overflow: hidden; */
  /* background: linear-gradient(to left, #0178bd, #368dc5); */
`;

export const BackgroundWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: 1;
  /* overflow: hidden; */
  /* transform: scale(1); */
  /* transform-origin: center center 0px; */
`;

export const Logo = styled.a`
  img {
    height: 130px;
    width: 130px;
    z-index: 2;
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(30px, 100px);
    background: #133853;
    border-radius: 100px;
    border: 1px solid #fff;
  }
`;

export const Card = styled.div`
  width: 100%;
  background: #ffebee;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 60% 40%;
  grid-template-areas: 'slogan slogan' 'cakebtn dacquoisebtn';
`;

// export const Card = styled.div`
//   width: 90%;
//   /* height: 200px; */
//   height: auto;
//   z-index: 1;
//   padding-top: 20px;
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
// `;

export const Slogan = styled.h2`
  grid-area: slogan;
  /* font-size: 1.5rem; */
  text-align: left;
  padding: 20px;
  font-family: 'Indie Flower', cursive;
`;

const ProductBtn = styled(Link)`
  grid-area: cakebtn;
  border: 0;
  background: #133853;
  color: #fff;
  /* width: 100px; */
  /* padding: 10px 30px; */
  margin: 20px 20px 70px;
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
  max-width: 200px;
  font-family: 'Otomanopee One', sans-serif;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const CakeBtn = styled(ProductBtn)`
  grid-area: cakebtn;
`;

export const DacquoiseBtn = styled(ProductBtn)`
  grid-area: dacquoisebtn;
`;
