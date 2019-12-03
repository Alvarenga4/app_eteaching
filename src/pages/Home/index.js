import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import {
  Tab, Tabs, Icon, TabHeading
} from 'native-base';

import {
  Container,
  Menu,
  Content,
} from './styles';

export default function Home({ navigation }) {
  return (
    <>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <Container>
        
        <Tabs>
          <Tab heading={ <TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="home" /></TabHeading>}>
            
          </Tab>
          <Tab heading={ <TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="user" /></TabHeading>}>
            
          </Tab>
        </Tabs>

      </Container>
      <Content>

      </Content>
    </>
  )
}

const styles = StyleSheet.create({ 
  tabHeading: {
    backgroundColor: '#000'
  }
 })