import React from 'react';
import { Container } from './FooterElements';

interface Props {}

export const Footer = (props: Props) => {
  return (
    <Container>
      {new Date().getFullYear()} Baking Bunny. All rights reserved.
    </Container>
  );
};
