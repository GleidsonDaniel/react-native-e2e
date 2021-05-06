import React from 'react';
import {Button} from 'react-native';
import monkey from '../../assets/monkey.png';
import BaseInput from '../../components/BaseInput/BaseInput.component';
import {theme} from '../../styles/theme';
import {Container, LoginContainer, Logo} from './Login.styles';

export default function Login() {
  return (
    <Container>
      <Logo source={monkey} resizeMode="contain" />
      <LoginContainer>
        <BaseInput testID="email" error="" placeholder="Digite seu e-mail" />
        <BaseInput testID="senha" error="" placeholder="Digite sua senha" />
        <Button title="Login" onPress={() => {}} color={theme.colors.cyan} />
      </LoginContainer>
    </Container>
  );
}
