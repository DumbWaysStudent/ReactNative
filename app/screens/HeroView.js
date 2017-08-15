import React, {Component} from 'react';
import {Container, Content, Text, Header, Left, Body, Right, Icon} from 'native-base';
import {TouchableOpacity} from 'react-native';

export default class HeroView extends Component{

 static navigatorStyle = {
   navBarHidden: true,
   tabBarHidden: true
 }

 renderHeader(){
    return (
      <Header>
        <Left>
          <TouchableOpacity onPress={()=>this.props.navigator.pop()}>
            <Icon name='arrow-back' style={{color: '#62AFEF'}}/>
          </TouchableOpacity>
        </Left>
        <Body>
          <Text>Hero Detail</Text>
        </Body>
        <Right/>
      </Header>
    )
  }

  render(){
    return (
      <Container>
        {this.renderHeader()}

        <Content>
          <Text>HeroView</Text>
        </Content>
      </Container>
    )
  }
}
