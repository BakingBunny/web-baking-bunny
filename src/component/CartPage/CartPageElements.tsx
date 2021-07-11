import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  /* padding: 0 20px; */
  height: 100%;
  max-width: 850px;
`;

export const Title = styled.h2`
  font-size: 2rem;
  letter-spacing: 2px;
  text-align: center;
  margin: 20px 0 0;
  width: 100%;
  text-transform: uppercase;
  font-family: 'Otomanopee One', sans-serif;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    /* grid-gap: 0px; */
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'cake-name cake-name'
    'price price'
    'fruitstitle fruitstitle'
    'fruitswrapper fruitswrapper'
    'sizetitle qtytitle'
    'sizewrapper qtywrapper'
    'add-to-cart-btn add-to-cart-btn';
  border-top: 1px solid #000;
`;

export const Image = styled.img`
  width: min(100%, 400px);
  object-fit: cover;
  border-radius: 10px;
  margin: auto;
`;

export const CakeName = styled.p`
  grid-area: cake-name;
  font-size: 1.6rem;
`;

export const PriceWrapper = styled.div`
  grid-area: price;
  font-size: 1.1rem;
  font-weight: lighter;
  margin: 0 0 30px;
`;

export const TastesTitle = styled.h2`
  grid-area: fruitstitle;
  justify-self: center;
  font-size: 1rem;
  margin: 2px 0;
`;

export const TastesWrapper = styled.div`
  grid-area: fruitswrapper;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2px 0 30px;
`;

const CircleBtn = styled.button`
  font-size: 1rem;
  margin: 8px;
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
`;

interface BtnProps {
  readonly isSelected: boolean;
}

export const TastesBtn = styled(CircleBtn)<BtnProps>`
  width: 95px;
  height: 2.5rem;
  font-size: 11px;
  border-radius: 5px;
  background-color: ${(props) => (props.isSelected ? '#133853' : '#426280')};
  opacity: ${(props) => (props.isSelected ? '1' : '0.7')};

  span {
    font-size: 9px;
  }
`;

export const SizeTitle = styled.h2`
  grid-area: sizetitle;
  font-size: 1rem;
  margin: 2px 10px;
  justify-self: center;
`;

export const SizeWrapper = styled.div`
  grid-area: sizewrapper;
  justify-self: center;
  display: flex;
  margin: 2px 10px;
`;

export const SizeBtn = styled(CircleBtn)<BtnProps>`
  opacity: ${(props) => (props.isSelected ? '1' : '0.7')};
`;

export const NA = styled.div`
  margin: 10px;
  opacity: 0.7;
`;

export const AddToCartBtn = styled.button`
  grid-area: add-to-cart-btn;
  border: 0;
  background: #133853;
  color: #fff;
  line-height: 2;
  letter-spacing: 2px;
  font-size: 14px;
  text-transform: uppercase;
  cursor: pointer;
  margin: 30px 0;
  padding: 10px 15px;
  border-radius: 5px;
`;