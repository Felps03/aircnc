import React from 'react';

import {Container, Text} from './styles';

const Button = ({
  label,
  height,
  marginTop,
  borderRadius,
  fontSize,
  backgroundColor,
  ...rest
}) => {
  return (
    <Container
      height={height}
      marginTop={marginTop}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      {...rest}>
      <Text fontSize={fontSize}>{label}</Text>
    </Container>
  );
};

export default Button;
