import React from 'react';
import {ListItem, Thumbnail, Body, Text} from 'native-base';

export default Hero = ({hero}) => (
  <ListItem>
    <Thumbnail
      square
      size={80}
      source={{ uri: hero.imageUri }}
    />
    <Body>
      <Text>{hero.name}</Text>
      <Text note>{hero.title}</Text>
    </Body>
  </ListItem>
)
