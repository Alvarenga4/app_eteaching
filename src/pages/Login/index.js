import React, { useState, useEffect } from 'react';
import { StatusBar, AsyncStorage } from 'react-native';
import logo from '../../assets/background.png';

import {
  Content,
  Input,
  Button,
  ButtonText,
} from './styles';

import api from '../../services/api';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit() {
    const response = await api.post('/login', {
      email,
      password
    }).catch(e => {
      console.log(e)
    });

    if (response.data) {
      await AsyncStorage.setItem('token', response.data.token);
      await AsyncStorage.setItem('name', response.data.user.fullname);
      await AsyncStorage.setItem('email', response.data.user.email);
      await AsyncStorage.setItem('cpf', response.data.user.cpf);
      await AsyncStorage.setItem('birthday', response.data.user.birthday);
      await AsyncStorage.setItem('address', response.data.user.address);
      await AsyncStorage.setItem('complement', response.data.user.complement);
      await AsyncStorage.setItem('number', response.data.user.number);
      await AsyncStorage.setItem('neighborhood', response.data.user.neighborhood);
      await AsyncStorage.setItem('zip_code', response.data.user.zip_code);
      await AsyncStorage.setItem('state', response.data.user.state);
      navigation.navigate('Home')
    }

  }

  return (
    <>
    <Content>
      <Input
        placeholder="Email"
        placeholderTextColor="#000"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        secureTextEntry={true}
        placeholder="Senha"
        placeholderTextColor="#000"
        value={password}
        onChangeText={setPassword}
      />
      <Button onPress={handleSubmit}>
        <ButtonText>Login</ButtonText>
      </Button>
    </Content>
    </>
  )
}