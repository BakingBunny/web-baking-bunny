import styled from 'styled-components';

export const Container = styled.div`
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8) !important;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 350px 350px;
  /* grid-template-columns: 1fr 1fr; */
  grid-gap: 50px;
  /* margin: 50px auto; */
  padding: 20px;
  /* max-width: 800px; */
  background: #fff;
  border: 5px solid #1338536e;
  border-radius: 10px;

  animation: popup 0.2s ease-out;

  @keyframes popup {
    from {
      transform: translateY(-10%);
      /* opacity: 0.5; */
    }
    to {
      transform: translateY(0%);
      /* opacity: 1; */
    }
  }

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-gap: 0px;
  }
`;

export const Image = styled.img`
  width: min(100%, 350px);
  object-fit: cover;
  border-radius: 10px;
  margin: auto;
`;

export const OptionWrapper = styled.div`
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
`;

export const CakeName = styled.div`
  grid-area: cake-name;
  font-size: 1.6rem;
  margin: 10px 0 5px;
`;

export const PriceWrapper = styled.div`
  grid-area: price;
  font-size: 1.1rem;
  font-weight: lighter;
  margin: 5px 0;
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

export const TastesBtn = styled(CircleBtn)<BtnProps>`
  width: 95px;
  height: 2.5rem;
  font-size: 11px;
  border-radius: 5px;
  margin: 8px 6px;
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
  width: auto;
  opacity: ${(props) => (props.isSelected ? '1' : '0.7')};
`;

export const NA = styled.div`
  margin: 10px;
  opacity: 0.7;
`;

export const QtyTitle = styled.h2`
  grid-area: qtytitle;
  font-size: 1rem;
  margin: 2px 10px;
  justify-self: center;
`;

export const QtyWrapper = styled.div`
  grid-area: qtywrapper;
  justify-self: center;
  display: flex;
  align-items: center;
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
  /* width: 60px;
  padding: 6px 0;
  text-align: center;
  background-color: #ffebee;
  color: #133853; */
`;

export const AddToCartBtn = styled.button`
  grid-area: add-to-cart-btn;
  border: 0;
  background: #133853;
  color: #fff;
  line-height: 2;
  height: 66px;
  letter-spacing: 2px;
  font-size: 14px;
  text-transform: uppercase;
  cursor: pointer;
  /* margin: 0px 0; */
  padding: 5px;
  border-radius: 5px;
`;
