import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Button, Text} from 'react-native';
import monkey from '../../assets/monkey.png';
import BaseInput from '../../components/BaseInput/BaseInput.component';
import {theme} from '../../styles/theme';
import {Container, LoginContainer, Logo, LogoLabel} from './Login.styles';

export default function Login() {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Logo source={monkey} resizeMode="contain" />
      <LogoLabel>Monkey Labs</LogoLabel>
      <LoginContainer>
        <BaseInput testID="email" error="" placeholder="Digite seu e-mail" />
        <BaseInput testID="senha" error="" placeholder="Digite sua senha" />
        <Button
          title="Login"
          onPress={() => navigate('Other')}
          color={theme.colors.cyan}
        />
      </LoginContainer>
    </Container>
  );
}
