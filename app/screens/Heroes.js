import React, {Component} from 'react';
import {Container, Content, Body, Text, List, ListItem, Thumbnail} from 'native-base';
import Hero from '../components/Hero';

export default class Heroes extends Component {

  heroes = [
    {
      name: "Eudora",
      title: "Lightning Sorceress",
      imageUri: "http://mobilelegendsbangbang.com/wp-content/uploads/2016/12/Hero151-1.jpg"
    },
    {
      name: "Miya",
      title: "Moonlight Archer",
      imageUri: "https://vignette3.wikia.nocookie.net/mobile-legends/images/3/37/Miya.png/revision/latest?cb=20161127000022"
    },
    {
      name: "Karina",
      title: "Shadow Blade",
      imageUri: "https://2.bp.blogspot.com/-L5F8nkA2nA0/WA48eGFoh1I/AAAAAAAAANU/JtXDztkafOE-GMv6NjgiQvUXJcPVz_rXwCPcB/s200/karina-mobile-legends-mobandroid-content.png"
    }
  ]

  render(){
    return (
      <Container>
        <Content>
          <List>
            {this.heroes.map((hero, key)=> <Hero key={key} hero={hero}/>)}
          </List>
        </Content>
      </Container>
    )
  }

}
