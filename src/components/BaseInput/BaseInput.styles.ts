import styled from 'styled-components/native';

export const InputContainer = styled.View`
  margin-bottom: 30px;
`;

export const Input = styled.TextInput`
  border-width: 1px;
  height: 40px;
  border-color: ${({theme}) => theme.colors.mediumGray};
  border-radius: 5px;
  padding: 10px;
`;

export const ErrorMessage = styled.Text`
  font-size: 13px;
  color: ${({theme}) => theme.colors.salmone};
  margin-top: 5px;
`;
