import React from 'react';
import {Platform, TextInputProps} from 'react-native';
import {ErrorMessage, Input, InputContainer} from './BaseInput.styles';

interface IBaseInput extends TextInputProps {
  testID: string;
  error: string | undefined;
}

export default function BaseInput({testID, error, ...props}: IBaseInput) {
  return (
    <InputContainer>
      <Input
        testID={`baseInput_${testID}`}
        {...props}
        // bug issue https://github.com/facebook/react-native/issues/30123
        ref={ref =>
          ref &&
          Platform.OS === 'android' &&
          ref.setNativeProps({style: {fontFamily: 'Roboto-Regular'}})
        }
        //
      />
      {!!error && (
        <ErrorMessage testID={`errorMessage_${testID}`}>{error}</ErrorMessage>
      )}
    </InputContainer>
  );
}
