import React, { Component } from 'react';
import { 
  Container, 
  Header, 
  Title, 
  Content, 
  Footer, 
  FooterTab, 
  Button, 
  Left, 
  Right, 
  Body, 
  Icon, 
  Text 
} from 'native-base';

import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import 
  TodoListComponent  from './app/todo-list-component'

export default class ToDo extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Todo app</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <TodoListComponent></TodoListComponent>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>@kuldarim 2017</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

AppRegistry.registerComponent('ToDo', () => ToDo);
