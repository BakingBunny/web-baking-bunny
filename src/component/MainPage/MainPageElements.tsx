import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;

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

export const Logo = styled.img`
  height: 100px;
  width: 100px;
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  transform: translate(30px, 50px);
  padding: 10px;
  background: #133853;
  border-radius: 60px;
  border: 1px solid #fff;
`;

export const CardWrapper = styled.div`
  width: 100%;
  background: #fff;
  height: 200px;
  display: flex;
  justify-content: center;

  z-index: 1;
`;

export const Card = styled.div`
  width: 90%;
  background: #fff;
  /* height: 200px; */
  height: auto;
  z-index: 1;
  padding-top: 20px;
`;

export const Slogan = styled.h2`
  /* font-size: 1.5rem; */
  width: 100%;
  text-align: left;
`;

export const ContinueBtn = styled.button`
  border: 0;
  background: #133853;
  color: #fff;
  width: 100%;
  padding: 10px 30px;
  font-size: 1.3rem;
  border-radius: 10px;
  letter-spacing: 2px;
  cursor: pointer;
`;
