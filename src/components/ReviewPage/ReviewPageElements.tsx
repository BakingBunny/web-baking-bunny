// import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  /* padding: 0 20px; */
  height: 100%;
  max-width: 850px;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: 2rem;
  letter-spacing: 2px;
  text-align: center;
  margin: 20px 0 10px;
  width: 100%;
  text-transform: uppercase;
  font-family: 'Otomanopee One', sans-serif;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'card-wrapper subtotal';

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-areas: 'subtotal' 'card-wrapper';
    /* grid-gap: 0px; */
  }
`;

export const CardWrapper = styled.div`
  grid-area: card-wrapper;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: min(35%, 300px) 1fr;
  border-top: 1px solid #9f9f9f87;
  padding: 10px 0;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 10px;
`;

export const Image = styled.img`
  width: min(100%, 300px);
  object-fit: cover;
  border-radius: 10px;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0 10px 10px;
`;

export const CakeName = styled.h3`
  font-size: 1.3rem;
  margin: 0 0 10px;
`;

export const PriceWrapper = styled.div`
  font-size: 1.1rem;
  font-weight: lighter;
  margin: 0 0 10px;
`;

export const TastesTitle = styled.h2`
  justify-self: center;
  font-size: 1rem;
  margin: 2px 0;
`;

export const TastesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 0 5px;
`;

export const CircleBtn = styled.button`
  font-size: 1rem;
  margin: 8px 14px;
  padding: 5px 10px;
  justify-self: center;
  border: none;
  border-radius: 25px;
  outline: 0;
  cursor: pointer;
  background-color: #133853;
  color: #fff;
  width: 30px;
  height: 30px;
  text-transform: uppercase;
  z-index: 2;

  &:disabled {
    background-color: #426280;
    cursor: default;
  }
`;

interface BtnProps {
  readonly isSelected: boolean;
}

export const SizeWrapper = styled.div`
  align-items: center;
  display: flex;
`;

export const SizeTitle = styled.h2`
  font-size: 1rem;
  flex-grow: 1;
  margin: 0;
`;

export const SizeBtn = styled(CircleBtn)<BtnProps>`
  opacity: ${(props) => (props.isSelected ? '1' : '0.7')};
  width: auto;
  margin-left: 0;
`;

export const TastesSelect = styled.select`
  width: 93%;
  height: 30px;
  margin: 10px 0;
  background-color: #133853;
  color: #fff;
  border: 0.5px solid rgba(0, 0, 0, 0.703);
  border-radius: 4px;
  font-size: 1rem;
  padding-left: 5px;

  option {
    background-color: #426280;
  }
`;

export const QtyWrapper = styled.div`
  align-items: center;
  display: flex;
`;

export const QtyTitle = styled.h2`
  font-size: 1rem;
  flex-grow: 1;
  margin: 0;
`;

export const ProductQty = styled.div`
  align-self: center;
  position: relative;

  span {
    position: absolute;
    width: 30px;
    padding: 0 15px;
    line-height: 30px;
    background-color: #ffebee;
    color: #133853;
    left: 0;
    top: 0;
    text-align: center;
    transform: translate(-50%, -50%);
  }
`;

export const DeleteBtn = styled.button`
  border: 0;
  background: none;
  color: #000;
  text-decoration: underline;
  line-height: 2;
  letter-spacing: 2px;
  font-size: 14px;
  cursor: pointer;
  /* margin: 10px auto; */
  border-radius: 5px;
`;

export const SubtotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: min(100%, 400px);
  height: 80px;
  border-top: 1px solid #9f9f9f87;
  padding: 15px 0;
  margin: 10px 0 0 0;
`;

export const SubtotalText = styled.b`
  font-size: 1.5rem;
`;

export const OrderBtn = styled.button`
  border: 0;
  color: #000;
  background: #f4ba29;
  text-decoration: none;
  line-height: 2;
  letter-spacing: 1px;
  font-size: 1.2rem;
  text-transform: uppercase;
  cursor: pointer;
  margin: 10px auto 0;
  padding: 10px 15px;
  border-radius: 5px;
  width: 300px;
  font-family: 'Otomanopee One', sans-serif;
`;
