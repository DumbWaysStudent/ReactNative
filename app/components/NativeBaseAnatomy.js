import React from 'react';
import {Container, Header, Content, Footer, Left, Body, Right, Text, Button, Icon, Card, CardItem} from 'native-base';

export default NativeBaseAnatomy = () => (
  <Container>
    <Header>
      <Left>
        <Icon name="arrow-back" style={{color: "#046CE3"}}/>
      </Left>
      <Body>
        <Text>Body</Text>
      </Body>
      <Right/>
    </Header>

    <Content>
      <Card>
        <CardItem header>
          <Text subtitle>Hello I am Card Header</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>Hello I am Card Body</Text>
          </Body>
        </CardItem>
      </Card>
    </Content>

    <Footer>
      <Text>I am Footer</Text>
    </Footer>
  </Container>
)
