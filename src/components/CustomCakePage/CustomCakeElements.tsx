import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto auto 20px;
  height: 100%;
  /* max-width: 800px; */
  width: 100%;
`;

export const Wrapper = styled.div`
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  padding: 30px 0;
  background: #fff;
`;

export const ProductName = styled.div`
  font-size: 2rem;
  letter-spacing: 3px;
  text-align: center;
  margin: 0 0 20px;
  text-transform: uppercase;
  font-family: 'Otomanopee One', sans-serif;

  @media screen and (max-width: 960px) {
    font-size: 1.3rem;
    letter-spacing: 1px;
  }
`;

export const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: 350px auto;
  width: 750px;
  margin: 0 auto;
  /* grid-template-columns: 1fr 1fr; *
  grid-gap: 50px;
  padding: 20px;
  /* max-width: min(90vw, 800px); */
  /* max-width: 800px; */
  position: relative;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-gap: 0px;
    margin: 5px auto;
    width: 100%;
    max-width: 500px;
  }
`;

export const Image = styled.img`
  width: min(100%, 350px);
  object-fit: cover;
  border-radius: 10px;
  margin: 10px auto;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 960px) {
    width: min(100%, 350px);
    /* max-height: 40vh; */
  }
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* height: 100%; */
`;

export const PriceWrapper = styled.div`
  font-size: 1.1rem;
  font-weight: lighter;
  margin: 5px 0;
  text-align: center;
  margin: 10px 0;
`;

export const TastesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  max-width: 340px;
  margin: 10px 0;
  border: 1px solid #4262807e;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
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
  margin: 8px 5px;
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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 960px) {
    flex-direction: row;
  }
`;

export const SizeWrapper = styled.div`
  grid-area: sizewrapper;
  align-items: center;
  display: flex;
  margin: 10px 0;
  border: 1px solid #4262807e;
  border-radius: 10px;
  padding: 0 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
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
  margin: 10px 0;
  padding: 0 10px;
  border: 1px solid #4262807e;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
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
  margin: 10px auto;
  padding: 5px;
  border-radius: 5px;
  width: 200px;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);

  &:hover {
    transform: translateY(-10px);
  }

  @media screen and (max-width: 960px) {
    &:hover {
      transform: translateY(0);
    }
  }
`;

export const NoteWrapper = styled.div`
  max-width: 750px;
  margin: 0 auto;
  padding: 10px;
`;
