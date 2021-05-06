import React from 'react';

import monkey from '../../assets/monkey.png';
import {Container, InputContainer, Logo} from './Login.styles';

export default function Login() {
  return (
    <Container>
      <Logo source={monkey} resizeMode="contain" />
      <InputContainer></InputContainer>
    </Container>
  );
}
