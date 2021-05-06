import 'react-native-gesture-handler';

import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {Routes} from './routes';
import {theme} from './styles/theme';

export default function index() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
