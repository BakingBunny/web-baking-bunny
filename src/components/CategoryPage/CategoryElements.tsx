import styled from 'styled-components';
import { FaRegCheckCircle } from 'react-icons/fa';

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
  display: flex;
  justify-content: center;
  z-index: 1;
  flex-wrap: wrap;
`;

// export const Card = styled(Link)`
export const Card = styled.div`
  background: #fff;
  width: clamp(162px, 44%, 250px);
  height: clamp(300px, 35vh, 350px);
  background-color: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin: 20px 8px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 55% 30% 15%;
  overflow-y: hidden;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-10px);
  }

  @media screen and (max-width: 960px) {
    &:hover {
      transform: translateY(0);
    }
  }
`;

export const CheckIcon = styled(FaRegCheckCircle)`
  position: absolute;
  font-size: 3rem;
  color: #133853;
  background: #ffebee;
  top: 10px;
  left: 10px;
  border-radius: 30px;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #fff;
  align-content: center;
  padding: 10px 0;
  color: #000;
`;

export const Name = styled.h2`
  font-size: 1rem;
  margin: 2px 10px;
  text-align: center;
`;

export const Price = styled.div`
  margin: 2px 10px;
  font-size: 0.8rem;
  text-align: center;
  margin-top: 10px;
  font-weight: lighter;
`;

export const SizeTitle = styled.h2`
  font-size: 1rem;
  margin: 2px 10px;
  align-self: center;
`;

export const SizeWrapper = styled.div`
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
  border: 0;
  background: #133853;
  color: #fff;
  padding: 5px 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
`;
