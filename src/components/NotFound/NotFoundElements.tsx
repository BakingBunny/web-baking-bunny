import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background: #133853;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Code = styled.span`
  margin-top: 24px;
  color: #fff;
  font-size: 8rem;
  margin-bottom: 1rem;
  font-weight: bold;
  @media screen and (max-width: 650px) {
    font-size: 6rem;
  }
`;

export const Text = styled.span`
  margin-top: 24px;
  color: #fff;
  font-size: 3rem;
  margin-bottom: 3rem;
  @media screen and (max-width: 650px) {
    font-size: 2rem;
  }
`;

export const Button = styled(Link)`
  width: 180px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 2rem;
  border: 1px solid;
  padding: 15px 15px;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  border-radius: 50px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.5);
  &:hover {
    transition: all 0.2s ease-in-out;
    background: white;
    color: #010606;
  }
`;
