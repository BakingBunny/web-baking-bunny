import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaRegCheckCircle } from 'react-icons/fa';

export const Container = styled.div`
  display: grid;
  padding: 10vh 0 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 5vh 5vw;
  margin: auto;
  text-align: center;
  width: min(auto, 90%);
  /* max-width: 90vw; */
`;

export const CheckIcon = styled(FaRegCheckCircle)`
  font-size: 5rem;
  margin: 10px auto;
  color: #00b515;
`;

export const ConfirmText = styled.div`
  /* font-family: 'Otomanopee One', sans-serif; */
  margin: 10px 0;
`;

export const NameTitle = styled(ConfirmText)`
  font-size: 1.5rem;
`;

export const MsgTitle = styled(ConfirmText)`
  font-size: 2.2rem;
  font-weight: bold;
`;

export const DescriptionText = styled(ConfirmText)`
  font-size: 1.2rem;
`;

export const ConfirmLink = styled(Link)`
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 10px 30px;
  margin: 30px auto 0;
  color: #000;
  background: #f4ba29;
  border: 0;
  border-radius: 10px;
  letter-spacing: 1px;
  cursor: pointer;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  font-family: 'Otomanopee One', sans-serif;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media screen and (max-width: 960px) {
    &:hover {
      transform: translateY(0);
    }
  }
`;
