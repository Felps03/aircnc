import React from 'react';

import {Container, Text} from './styles';

const Button = ({label, ...rest}) => {
  return (
    <Container {...rest}>
      <Text>{label}</Text>
    </Container>
  );
};

export default Button;
