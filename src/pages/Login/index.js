import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import logo from '../../assets/background.png';

import {
  Content,
  Input,
  Button,
  ButtonText,
} from './styles';

export default function Login({ navigation }) {

  async function handleSubmit() {
    navigation.navigate('Home')
  }

  return (
    <>
    <Content>
      <Input 
        placeholder="Email"
        placeholderTextColor="#000"
      />
      <Input 
        placeholder="Senha"
        placeholderTextColor="#000"
      />
      <Button onPress={handleSubmit}>
        <ButtonText>Login</ButtonText>
      </Button>
    </Content>
    </>
  )
}