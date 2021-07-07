import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 2rem;
  letter-spacing: 7px;
  text-align: center;
  margin: 20px 0 0;
  text-transform: uppercase;
  font-family: 'Otomanopee One', sans-serif;
`;

export const CardWrapper = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  z-index: 1;
  flex-wrap: wrap;
`;

export const Card = styled(Link)`
  background: #fff;
  width: clamp(162px, 44vw, 250px);
  height: clamp(300px, 35vh, 350px);
  background-color: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin: 20px 8px;
  /* position: relative; */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 55% 30% 15%;
  overflow-y: hidden;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  @media screen and (max-width: 960px) {
    &:hover {
      transform: translateY(0);
    }
  }
`;

// export const Card = styled.div`
//   width: 162px;
//   background: #fff;
//   height: 300px;
//   background-color: #fff;
//   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
//   border-radius: 4px;
//   margin: 20px 8px;
//   /* position: relative; */
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-template-rows: 55% 30% 15%;
//   overflow-y: hidden;
// `;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;

  /* z-index: 1; */
  /* overflow: hidden; */
  /* transform: scale(1); */
  /* transform-origin: center center 0px; */
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #fff;
  /* justify-content: center; */
  align-content: center;
  padding: 10px 0;
  color: #000;
  /* box-shadow: 0 0 0 rgba(0, 0, 0, 0); */
  /* transform: translateY(117px); */
`;
// export const Detail = styled.div`
//   position: absolute;
//   width: 100%;
//   bottom: 0;
//   background: #fff;
//   /* box-shadow: 0 0 0 rgba(0, 0, 0, 0); */
//   transition: all 0.5s ease;
//   /* transform: translateY(117px); */
//   transform: translateY(7rem);
//   display: grid;
//   grid-row-gap: 5px;
//   grid-template-columns: 1fr auto;
//   grid-template-rows: auto;
//   overflow: hidden;
//   grid-template-areas:
//     'name price'
//     'sizetitle sizes'
//     'detailbtn detailbtn'
//     'cartbtn cartbtn';

//   ${Card}:hover & {
//     transform: translateY(0);
//     box-shadow: 0 -5px 15px rgba(0, 0, 0, 0);
//   }
// `;

export const Name = styled.h2`
  /* grid-area: name; */
  font-size: 1rem;
  margin: 2px 10px;
  text-align: center;

  /* align-self: center; */
`;

export const Price = styled.div`
  /* grid-area: price; */
  margin: 2px 10px;
  font-size: 0.8rem;
  text-align: center;
  margin-top: 10px;
  font-weight: lighter;
  /* justify-self: end;
  align-self: center; */
`;

export const SizeTitle = styled.h2`
  /* grid-area: sizetitle; */
  font-size: 1rem;
  margin: 2px 10px;
  align-self: center;
`;

export const SizeWrapper = styled.div`
  /* grid-area: sizes; */
  display: flex;
  justify-self: end;
  margin: 2px 10px;
`;

export const Size = styled.button`
  font-size: 0.9rem;
  margin: 0 0 0 8px;
  align-self: center;
`;

export const DetailBtn = styled.button`
  grid-area: detailbtn;
  border: 0;
  background: #133853;
  color: #fff;
  padding: 5px 10px;
  margin: 8px 10px 4px;
  border-radius: 10px;
  letter-spacing: 2px;
  cursor: pointer;
`;

export const OrderNowBtn = styled.button`
  /* grid-area: cartbtn; */
  border: 0;
  background: #133853;
  color: #fff;
  padding: 5px 10px;
  letter-spacing: 1px;
  /* font-size: 1rem; */
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
`;
