import React from 'react';
import {TextInputProps} from 'react-native';
import {ErrorMessage, Input, InputContainer} from './BaseInput.styles';

interface IBaseInput extends TextInputProps {
  testID: string;
  error: string;
}

export default function BaseInput({testID, error, ...props}: IBaseInput) {
  return (
    <InputContainer>
      <Input testID={`baseInput_${testID}`} {...props} />
      {!!error && (
        <ErrorMessage testID={`errorMessage_${testID}`}>{error}</ErrorMessage>
      )}
    </InputContainer>
  );
}
