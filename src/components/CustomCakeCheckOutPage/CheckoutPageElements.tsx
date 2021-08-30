import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CheckOutBtn = styled.button`
  border: 0;
  color: #fff;
  font-size: 1rem;
  margin: 20px 15px 0;
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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 700px;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  padding: 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'basic-option user-info' 'confirm confirm';

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-areas: 'basic-option' 'user-info' 'confirm';
    grid-gap: 0px;
  }
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

export const BasicOption = styled.div`
  grid-area: basic-option;
`;

export const UserInfoForm = styled.div`
  grid-area: user-info;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  padding: 20px 0;
  background: #fff;
  border: 1px solid #9f9f9f87;
  border-radius: 10px;
  align-items: center;
  width: 330px;
  animation: clientInfoPopup 0.3s ease-in;

  &:last-child {
    margin: 10px auto 0;
  }

  @keyframes clientInfoPopup {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const CheckOutQuestion = styled.div`
  font-size: 1.2rem;
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

export const DisplayDeliveryFee = styled.div`
  margin: 10px 0 0;
  font-size: 1rem;
`;

export const DeliveryRequirement = styled.div`
  max-width: 95vw;
  margin: 10px 0;
  font-family: 'Georama', sans-serif;
  font-size: 1rem;
`;

export const DateBtn = styled(CheckOutBtn)<BtnProps>`
  background-color: ${(props) => (props.isSelected ? '#133853' : '#426280')};
  font-size: 1.2rem;
  width: 270px;
`;

export const TimeWrapper = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  margin: 0 auto;
`;

export const TimeSelect = styled.select`
  /* width: 10px; */
  height: 30px;
  margin: 0 10px;
  border: 0.5px solid #426280c1;
  border-radius: 4px;
  font-size: 1rem;
  padding-left: 5px;
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

export const MapIframe = styled.iframe`
  border: 1px solid #13385366;
  width: 100%;
  max-width: 500px;
  height: 300px;
  margin: 20px auto 0;
`;

export const CloseBtn = styled(CheckOutBtn)`
  margin: auto;
`;

interface DeliveryOnlyInputWrapperProps {
  readonly isDisplay: boolean;
}

export const DeliveryOnlyInputWrapper = styled.div<DeliveryOnlyInputWrapperProps>`
  display: ${(props) => (props.isDisplay ? 'block' : 'none')};
`;

export const ClientInputWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 60px;
  margin: 15px 0 0;
`;

export const ClientInfoInput = styled.input`
  /* width: calc(100%-20px); */
  width: 240px;
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

export const ClientTextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 15px 0 0;
  border-bottom: 2px solid #133853;
  background-color: rgb(249, 250, 251);

  &:last-child {
    margin-bottom: 10px;
  }
`;

export const ClientInfoTextAreaLabel = styled.label`
  color: #133853;
  font-size: 0.7rem;
  font-family: 'Georama', sans-serif;
  font-weight: 400;
  padding: 10px 0 0 20px;
`;

export const ClientInfoTextarea = styled.textarea`
  width: 280px;
  resize: vertical;
  padding: 5px 0 10px 20px;
  color: rgb(12, 21, 29);
  border: none;
  outline: none;
  background-color: rgb(249, 250, 251);
  font-size: 1rem;
`;

export const PostalCodeDisplay = styled.div`
  width: 240px;
  height: 60px;
  padding-top: 10px;
  padding-left: 20px;
  color: rgb(12, 21, 29);
  border: none;
  outline: none;
  font-size: 1rem;
  background-color: rgb(249, 250, 251);
  line-height: 60px;
`;

export const PostalCodeLabel = styled(ClientInfoLabel)`
  &::after {
    transform: translateX(0);
  }

  span {
    transform: translateY(-90%);
    font-size: 0.7rem;
    color: #133853;
  }
`;

export const ClientInfoErrorMsg = styled.div`
  text-align: start;
  left: 0;
  font-size: 0.8rem;
  color: red;
  margin-top: 0;
`;

export const BtnWrapper = styled.div`
  display: flex;
  margin: 10px auto;
`;

export const ConfirmBtn = styled(CheckOutBtn)`
  font-size: 1rem;
  text-transform: uppercase;
  padding: 10px 20px;
  color: #000;
  background: #f4ba29;
`;

export const CancelBtn = styled(CheckOutBtn)`
  font-size: 1rem;
  text-transform: uppercase;
  padding: 10px 20px;
  color: #000;
  background: #e4d3a6;
`;

export const ConfirmLink = styled(Link)`
  grid-area: confirm;
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 10px 30px;
  margin: 10px auto 30px;
  color: #000;
  background: #f4ba29;
  border: 0;
  border-radius: 10px;
  letter-spacing: 1px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
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
