import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Button} from 'react-native';
import styled from 'styled-components/native';
import {theme} from '../../styles/theme';

const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export default function Other() {
  const {goBack} = useNavigation();
  return (
    <Container>
      <Button title="Voltar" color={theme.colors.cyan} onPress={goBack} />
    </Container>
  );
}
