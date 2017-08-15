import React, {Component} from 'react';
import {Container, Content, Text} from 'native-base';

export default class HeroAdd extends Component {

  static navigatorStyle = {
    navBarHidden: true,
    tabBarHidden: true
  }

  render(){
    return (
      <Container>
        <Content>
          <Text>HeroAdd</Text>
        </Content>
      </Container>
    )
  }

}
