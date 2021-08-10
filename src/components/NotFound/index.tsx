import React from 'react';
import { Container, Code, Text, Button } from './NotFoundElements';

interface Props {}

export const NotFound = (props: Props) => {
  return (
    <Container>
      <Code>404</Code>
      <Text>Page Not Found</Text>
      <Button to='/'>Home</Button>
    </Container>
  );
};
