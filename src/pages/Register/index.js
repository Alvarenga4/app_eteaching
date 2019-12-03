import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import logo from '../../assets/background.png';

import {
  Content,
  Input,
  Button,
  ButtonText,
  SubTitle,
} from './styles';

export default function Register({ navigation }) {
  return (
    <>
    <StatusBar backgroundColor="#000" barStyle="light-content" />
    <Content contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
    <SubTitle>Dados pessoais</SubTitle>
      <Input 
        placeholder="Nome Completo"
        placeholderTextColor="#000"
      />
      <Input 
        placeholder="CPF"
        placeholderTextColor="#000"
      />
      <Input 
        placeholder="Email"
        placeholderTextColor="#000"
      />
      <Input 
        placeholder="Data de Nascimento"
        placeholderTextColor="#000"
      />
      <SubTitle>Dados de endereço</SubTitle>
      <Input 
        placeholder="CEP"
        placeholderTextColor="#000"
      />
      <Input 
        placeholder="Logradouro"
        placeholderTextColor="#000"
      />
      <Input 
        placeholder="Número"
        placeholderTextColor="#000"
      />
      <Input 
        placeholder="Complemento"
        placeholderTextColor="#000"
      />
      <Input 
        placeholder="Bairro"
        placeholderTextColor="#000"
      />
      <Input 
        placeholder="UF"
        placeholderTextColor="#000"
      />
      <Button>
        <ButtonText>Cadastrar</ButtonText>
      </Button>
    </Content>
    </>
  )
}