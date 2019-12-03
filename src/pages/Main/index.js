import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import {
  Tab, Tabs, Icon, TabHeading
} from 'native-base';

import {
  Container,
  Logo,
  Content,
  Menu,
} from './styles';

import logo from '../../assets/background.png';

import Login from '../Login';
import Register from '../Register';

export default function Main({ navigation }) {
  return (
    <>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <Container>
        <Logo 
          source={logo}
          resizeMode="contain"
        />
      </Container>
      <Content>
        <Tabs>

          <Tab heading={ <TabHeading style={styles.tabHeading} ><Menu>Login</Menu></TabHeading>}>
            <Login navigation={navigation} />
          </Tab>
          <Tab heading={ <TabHeading style={styles.tabHeading} ><Menu>Cadastro</Menu></TabHeading>}>
            <Register navigation={navigation} />
          </Tab>
        </Tabs>
      </Content>
    </>
  )
}

const styles = StyleSheet.create({ 
  tabHeading: {
    backgroundColor: '#FFF'
  }
 })