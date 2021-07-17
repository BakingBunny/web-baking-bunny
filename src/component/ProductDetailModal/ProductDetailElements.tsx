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
  grid-template-columns: 350px auto;
  /* grid-template-columns: 1fr 1fr; */
  grid-gap: 50px;
  /* margin: 50px auto; */
  padding: 20px;
  max-width: 800px;
  min-width: 320px;
  background: #fff;
  border: 3px solid #133853;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);

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

export const CloseBtn = styled.div`
  position: absolute;
  top: -25px;
  left: -25px;
  /* transform: translate(-50%, -50%); */
  z-index: 5;
  font-size: 3rem;
  color: #133853b9;
  cursor: pointer;
  background: #fff;
  width: 3rem;
  height: 3rem;
  border-radius: 3rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);

  &:hover {
    animation: rotateBtn 0.5s ease-in-out forwards;

    @keyframes rotateBtn {
      0% {
        transform: rotate(0deg);
      }
      90% {
        transform: rotate(200deg);
      }
      100% {
        transform: rotate(180deg);
        box-shadow: none;
        color: #133853;
      }
    }
  }

  @media screen and (max-width: 960px) {
    top: 0;
    left: 0;

    &:hover {
      animation: none;
    }
  }
`;

export const Image = styled.img`
  width: min(100%, 350px);
  object-fit: cover;
  border-radius: 10px;
  margin: auto;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* height: 100%; */
`;
// export const OptionWrapper = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   grid-template-areas:
//     'cake-name cake-name'
//     'price price'
//     'fruitstitle fruitstitle'
//     'fruitswrapper fruitswrapper'
//     'sizewrapper qtywrapper'
//     'add-to-cart-btn add-to-cart-btn';
// `;

export const CakeName = styled.div`
  font-size: 1.6rem;
  margin: 10px 0 5px;
  text-align: center;
  font-family: 'Otomanopee One', sans-serif;
`;

export const PriceWrapper = styled.div`
  /* grid-area: price; */
  font-size: 1.1rem;
  font-weight: lighter;
  margin: 5px 0;
  text-align: center;
  margin-top: 10px;
`;

// export const TastesTitle = styled.h2`
//   /* grid-area: fruitstitle; */
//   justify-self: center;
//   font-size: 1rem;
//   margin: 2px 0;
// `;

export const TastesWrapper = styled.div`
  /* grid-area: fruitswrapper; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
`;

export const CircleBtn = styled.button`
  font-size: 1rem;
  /* margin: 8px 14px; */
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
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media screen and (max-width: 960px) {
    &:hover {
      transform: translateY(0);
    }
  }

  span {
    font-size: 9px;
  }
`;

export const SubOptionWrapper = styled.div`
  /* align-items: center; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 10px 0;
  width: 100%;

  @media screen and (max-width: 960px) {
    flex-direction: row;
  }
`;

export const SizeWrapper = styled.div`
  grid-area: sizewrapper;
  align-items: center;
  display: flex;
`;

export const OptionTitle = styled.h2`
  font-size: 1rem;
  justify-self: center;
`;

export const SizeBtn = styled(CircleBtn)<BtnProps>`
  width: auto;
  margin: 10px 0 10px 10px;
  opacity: ${(props) => (props.isSelected ? '1' : '0.7')};
`;

export const QtyWrapper = styled.div`
  grid-area: qtywrapper;
  justify-self: end;
  align-items: center;
  display: flex;
`;

export const QtyDecrementBtn = styled(CircleBtn)`
  margin-right: 15px;
  margin-left: 10px;
`;

export const QtyIncrementBtn = styled(CircleBtn)`
  margin-left: 15px;
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
  margin-top: auto;
  padding: 5px;
  border-radius: 5px;
  width: 200px;
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
