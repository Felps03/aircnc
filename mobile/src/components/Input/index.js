import React from 'react';

import {Label, TextInput} from './styles';

const Input = ({label, ...rest}) => {
  return (
    <>
      <Label>{label}</Label>
      <TextInput {...rest} />
    </>
  );
};

export default Input;
