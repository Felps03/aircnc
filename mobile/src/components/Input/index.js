import React from 'react';

import {Label, TextInput} from './styles';

const Input = ({label, marginTop, ...rest}) => {
  return (
    <>
      <Label marginTop={marginTop}>{label}</Label>
      <TextInput {...rest} />
    </>
  );
};

export default Input;
