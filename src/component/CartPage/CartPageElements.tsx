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
  margin: 20px 0;
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
  padding: 10px;
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: min(35%, 300px) 1fr;
  /* grid-template-areas:
    'cake-name cake-name'
    'price price'
    'fruitstitle fruitstitle'
    'fruitswrapper fruitswrapper'
    'sizetitle qtytitle'
    'sizewrapper qtywrapper'
    'add-to-cart-btn add-to-cart-btn'; */
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
  /* margin: auto; */
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0 10px 10px;
`;

export const CakeName = styled.h3`
  grid-area: cake-name;
  font-size: 1.3rem;
  margin: 0 0 5px;
`;

export const PriceWrapper = styled.div`
  grid-area: price;
  font-size: 1.1rem;
  font-weight: lighter;
  margin: 0 0 5px;
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
  grid-area: sizewrapper;
  align-items: center;
  display: flex;
  margin: 0 0 5px;
  /* margin: 2px 10px; */
`;

export const SizeTitle = styled.h2`
  grid-area: sizetitle;
  font-size: 1rem;
  flex-grow: 1;
  /* margin: 2px 0; */
  margin: 0;
`;

export const SizeBtn = styled(CircleBtn)<BtnProps>`
  opacity: ${(props) => (props.isSelected ? '1' : '0.7')};
  width: auto;
  margin-left: 0;
`;

export const QtyWrapper = styled.div`
  grid-area: qtywrapper;
  align-items: center;
  display: flex;
  margin: 0 0 5px;
  /* position: relative; */
`;

export const QtyTitle = styled.h2`
  grid-area: qtytitle;
  font-size: 1rem;
  flex-grow: 1;
  margin: 0;
`;

export const ProductQty = styled.div`
  align-self: center;
  position: relative;
  /* width: 30px; */

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

// export const ProductQty = styled.div`
//   align-self: center;
//   padding: 6px 0;
//   text-align: center;
//   color: #133853;
//   position: relative;
//   width: 10px;

//   &::after {
//     content: '';
//     position: absolute;
//     width: 60px;
//     height: 30px;
//     background-color: #ffebee;
//     left: 0;
//     top: 0;
//     transform: translate(-50%, 0);
//   }
// `;

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

// export const AddToCartBtn = styled.button`
//   grid-area: add-to-cart-btn;
//   border: 0;
//   background: #133853;
//   color: #fff;
//   line-height: 2;
//   letter-spacing: 2px;
//   font-size: 14px;
//   text-transform: uppercase;
//   cursor: pointer;
//   margin: 30px 0;
//   padding: 10px 15px;
//   border-radius: 5px;
// `;
