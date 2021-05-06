import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 20px;
`;

export const LoginContainer = styled.View`
  padding: 60px 20px;
  flex: 1;
`;

export const Logo = styled.Image`
  height: 200px;
  align-self: center;
`;

export const LogoLabel = styled.Text`
  align-self: center;
  font-weight: 700;
  font-size: 25px;
  color: ${({theme}) => theme.colors.brown};
`;

export const TouchableWithoutFeedbackStyled = styled(TouchableWithoutFeedback)`
  height: 100%;
`;
