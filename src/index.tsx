import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import Login from './screens/Login/Login.screen';
import {theme} from './styles/theme';

export default function index() {
  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
}
