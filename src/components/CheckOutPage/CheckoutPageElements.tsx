// import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface BtnProps {
  readonly isSelected: boolean;
}

export const CheckOutBtn = styled.button`
  border: 0;
  color: #fff;
  margin: 20px 15px;
  border-radius: 10px;
  letter-spacing: 1px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  font-family: 'Otomanopee One', sans-serif;
  background-color: #133853;
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

export const Wrapper = styled.div`
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

export const DeliveryOptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  margin: auto;
  border-top: 1px solid #42628056;
  align-items: center;
  width: 330px;
`;

export const CheckOutQuestion = styled.div`
  font-size: 1.2rem;
  padding: 1rem 0 0 0;
  font-family: 'Georama', sans-serif;
  font-weight: 500;
  color: #133853;
`;

export const DeliveryBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  overflow: hidden;
`;

interface BtnProps {
  readonly isSelected: boolean;
}

export const DeliveryOptionBtn = styled(CheckOutBtn)<BtnProps>`
  font-size: ${(props) => (props.isSelected ? '1.2rem' : '1rem')};
  /* width: clamp(150px, 75%, 200px); */
  width: 130px;
  text-transform: uppercase;
  background-color: ${(props) => (props.isSelected ? '#133853' : '#426280')};
  opacity: ${(props) => (props.isSelected ? '1' : '0.7')};
`;

export const DeliveryRequirement = styled.div`
  max-width: 95vw;
  margin: 10px 0;
  font-family: 'Georama', sans-serif;
  font-size: 1rem;
`;

export const DateBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 330px;
  /* justify-content: space-between; */
  margin: auto;
  border-top: 1px solid #42628056;
  align-items: center;
`;

export const DateBtn = styled(CheckOutBtn)`
  font-size: 1.2rem;
  width: 270px;
  margin: 20px auto;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 20px;
  border: 3px solid #133853;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  animation: popup 0.2s ease-out;
  max-width: 500px;

  @keyframes popup {
    from {
      transform: translateY(-10%);
      opacity: 0;
    }
    to {
      transform: translateY(0%);
      opacity: 1;
    }
  }

  @media screen and (max-width: 960px) {
    max-width: 85%;
  }
`;

export const CheckAddressBtn = styled(CheckOutBtn)`
  font-size: 1.2rem;
  width: 200px;
  margin: 10px auto;
`;

export const ClientInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #42628056;
  width: 330px;
  margin: 0 auto;
  animation: clientInfoPopup 0.3s ease-in;

  @keyframes clientInfoPopup {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ClientInputWrapper = styled.div`
  position: relative;
  height: 60px;
  overflow: hidden;
  margin: 15px 0 0;
`;

export const ClientInfoInput = styled.input`
  width: calc(100%-20px);
  height: 60px;
  padding-top: 10px;
  padding-left: 20px;
  color: rgb(12, 21, 29);
  border: none;
  outline: none;
  font-size: 1rem;

  background-color: rgb(249, 250, 251);

  &:focus + label span,
  &:valid + label span {
    transform: translateY(-90%);
    font-size: 0.7rem;
    color: #133853;
  }

  // border-bottom
  &:focus + label::after,
  &:valid + label::after {
    transform: translateX(0%);
  }
`;

export const ClientInfoLabel = styled.label`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; // to be clicked the input
  border-bottom: 1px solid rgba(0, 0, 0, 0.42);
  font-family: 'Georama', sans-serif;
  font-weight: 400;

  &::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    bottom: -1px;
    border-bottom: 2px solid #133853;
    transform: translateX(-100%);
    /* transform: translateY(0%); */
    transition: all 0.3s ease;
  }

  span {
    position: absolute;
    bottom: 30%;
    left: 20px;
    transition: transform 0.3s ease;
  }
`;

export const ClientInfoErrorMsg = styled.div`
  text-align: start;
  left: 0;
  font-size: 0.8rem;
  color: red;
  margin-top: 0;
`;

export const ConfirmBtn = styled(CheckOutBtn)`
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 10px 30px;
  margin: 30px auto 10px;
  color: #000;
  background: #f4ba29;
`;
