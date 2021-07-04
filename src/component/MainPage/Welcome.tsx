import React from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
import {
  Container,
  BackgroundWrapper,
  Image,
  Logo,
  Card,
  Slogan,
  CakeBtn,
  DacquoiseBtn,
} from './MainPageElements';

interface Props {}

export const Welcome = (props: Props) => {
  const isMobile: boolean = useWindowSize();

  return (
    <Container>
      <BackgroundWrapper>
        {isMobile ? (
          <Image
            src={require('../../img/welcome_background_mobile.jpg')?.default}
            alt='mobile_bg'
          />
        ) : (
          <Image
            src={require('../../img/welcome_background_mobile.jpg')?.default}
            alt='desktop_bg'
          />
        )}
        <Logo
          href='https://www.instagram.com/baking.bunny_yyc/'
          rel='noreferrer'
          target='_blank'
        >
          <img
            src={require('../../img/logo_circle.png')?.default}
            alt='logo_img'
          />
        </Logo>
      </BackgroundWrapper>
      <Card>
        <Slogan>
          Baking Bunny is specialized in flower cakes, custom designed cakes,
          and dacquoise in birthdays, showers, and every other occaion in
          Calgary, Alberta{' '}
        </Slogan>
        <CakeBtn to={'cakes'}>Cake</CakeBtn>
        <DacquoiseBtn to={'dacquoises'}>Dacquoise</DacquoiseBtn>
      </Card>
    </Container>
  );
};
