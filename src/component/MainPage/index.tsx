import React from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
import {
  Container,
  BackgroundWrapper,
  Image,
  LogoMobile,
  Card,
  LogoDesktop,
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
        <Image
          src={require('../../img/welcome_background.jpg')?.default}
          alt='welcome_background'
        />
        {isMobile && (
          <LogoMobile
            href='https://www.instagram.com/baking.bunny_yyc/'
            rel='noreferrer'
            target='_blank'
          >
            <img
              src={require('../../img/logo_circle.png')?.default}
              alt='logo_img'
            />
          </LogoMobile>
        )}
      </BackgroundWrapper>
      <Card>
        {!isMobile && (
          <LogoDesktop>
            <img
              src={require('../../img/logo_circle.png')?.default}
              alt='logo_img'
            />
          </LogoDesktop>
        )}
        <Slogan>
          Baking Bunny is specialized in flower cakes, custom designed cakes,
          and dacquoise in birthdays, showers, and every other occaion in
          Calgary, Alberta{' '}
        </Slogan>
        <CakeBtn to={'/cakes'}>Cake</CakeBtn>
        <DacquoiseBtn to={'/dacquoises'}>Dacquoise</DacquoiseBtn>
      </Card>
    </Container>
  );
};
