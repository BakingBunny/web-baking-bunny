import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto auto 20px;
  height: 100%;
  max-width: 700px;
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
  grid-gap: 1rem;
  padding: 10px;
  grid-template-columns: 1fr 310px;
  grid-template-areas: 'card-wrapper option-info';

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-areas: 'card-wrapper' 'option-info';
    grid-gap: 0px;
  }
`;

export const CardContainer = styled.div`
  grid-area: card-wrapper;
  margin: 0 0 15px;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 15px;
  background: #fff;
  border: 1px solid #9f9f9f87;
  border-radius: 10px;
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: min(35%, 150px) 1fr;
  /* padding: 20px 0; */
  border-top: 1px solid #9f9f9f87;
  margin: 5px 0;
  padding: 10px 0 0;

  &:first-child {
    border-top: 0;
  }
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

export const OptionText = styled.div`
  font-size: 1.1rem;
  margin: 0 0 0.5rem;
`;

export const ProductName = styled(OptionText)`
  font-size: 1.2rem;
  font-weight: 700;
`;

export const PriceText = styled(OptionText)`
  font-weight: lighter;
`;

export const OptionInfoContainer = styled.div`
  grid-area: option-info;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (max-width: 960px) {
    margin: 0 auto;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid #9f9f9f87;
  border-radius: 10px;
  margin: 0 0 15px;
  padding: 15px;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: auto 1fr;
  background: #fff;
  border: 1px solid #9f9f9f87;
  border-radius: 10px;
  margin: 0 0 15px;
  padding: 15px;
`;

export const OptionInfoText = styled.div`
  font-size: 1.1rem;
  margin: 0.5rem auto;
  text-align: start;
`;

export const TotalWrapper = styled(GridWrapper)`
  padding: 15px 40px;
`;

export const TextLeft = styled(OptionInfoText)`
  /* text-align: start; */
  width: 100%;
`;

export const TextRight = styled(OptionInfoText)`
  text-align: end;
  width: 100%;
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
