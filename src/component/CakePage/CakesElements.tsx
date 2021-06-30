import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  /* overflow: hidden; */
  /* background: linear-gradient(to left, #0178bd, #368dc5); */
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 2rem;
  letter-spacing: 7px;
  text-align: center;
  margin: 0;
`;

export const CardWrapper = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  z-index: 1;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  width: 160px;
  background: #fff;
  height: 200px;
  background-color: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: 10px;
  position: relative;
  overflow-y: hidden;
`;

export const Image = styled.img`
  height: 85%;
  width: 100%;
  object-fit: cover;

  /* z-index: 1; */
  /* overflow: hidden; */
  /* transform: scale(1); */
  /* transform-origin: center center 0px; */
`;

export const Detail = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  background: #fff;
  /* box-shadow: 0 0 0 rgba(0, 0, 0, 0); */
  transition: all 0.5s ease;
  transform: translateY(115px);
  display: grid;
  grid-row-gap: 5px;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto;
  overflow: hidden;
  grid-template-areas:
    'name price'
    'sizetitle sizes'
    'detailbtn detailbtn'
    'cartbtn cartbtn';

  ${Card}:hover & {
    transform: translateY(0);
  }
`;

export const CakeName = styled.h2`
  grid-area: name;
  font-size: 1.2rem;
  margin: 2px 10px;
  align-self: center;
`;

export const Price = styled.div`
  grid-area: price;
  margin: 2px 10px;
  justify-self: end;
  align-self: center;
`;

export const SizeTitle = styled.h2`
  grid-area: sizetitle;
  font-size: 1.2rem;
  margin: 2px 10px;
  align-self: center;
`;

export const SizeWrapper = styled.div`
  grid-area: sizes;
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

export const AddCartBtn = styled.button`
  grid-area: cartbtn;
  border: 0;
  background: #133853;
  color: #fff;
  padding: 5px 10px;
  margin: 4px 10px 8px;
  border-radius: 10px;
  letter-spacing: 1px;
  cursor: pointer;
`;
