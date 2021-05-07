import {useNavigation} from '@react-navigation/core';
import {useFormik} from 'formik';
import React from 'react';
import {Button, Keyboard} from 'react-native';
import * as yup from 'yup';

import monkey from '../../assets/monkey.png';
import BaseInput from '../../components/BaseInput/BaseInput.component';
import {theme} from '../../styles/theme';
import {
  Container,
  LoginContainer,
  Logo,
  LogoLabel,
  TouchableWithoutFeedbackStyled,
} from './Login.styles';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Insira um email valido')
    .required('O campo email é requerido'),
  password: yup
    .string()
    .min(8, ({min}) => `A senha deve ter no minimo ${min} caracteres`)
    .required('O campo senha é requerido'),
});

export default function Login() {
  const {navigate} = useNavigation();

  const {
    values: {email, password},
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    isValid,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values, {resetForm}) => {
      navigate('Other');
      resetForm();
    },
    validationSchema: loginValidationSchema,
  });

  return (
    <TouchableWithoutFeedbackStyled onPress={Keyboard.dismiss}>
      <Container>
        <Logo source={monkey} resizeMode="contain" />
        <LogoLabel>Monkey Labs</LogoLabel>
        <LoginContainer>
          <BaseInput
            testID="email"
            error={errors.email}
            placeholder="Digite seu e-mail"
            value={email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            keyboardType="email-address"
            onSubmitEditing={Keyboard.dismiss}
          />
          <BaseInput
            testID="password"
            error={errors.password}
            placeholder="Digite sua senha"
            value={password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            secureTextEntry
            onSubmitEditing={Keyboard.dismiss}
          />
          <Button
            title="Login"
            onPress={handleSubmit}
            color={theme.colors.cyan}
            disabled={!isValid}
            testID="login_button"
          />
        </LoginContainer>
      </Container>
    </TouchableWithoutFeedbackStyled>
  );
}
