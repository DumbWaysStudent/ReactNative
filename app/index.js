import React from 'react';
import {View, Text} from 'react-native';

export default class Index extends React.Component {

  componentWillMount(){
    console.log('Component Will Mount');
  }

  componentDidMount(){
    console.log('Component Did Mount');
  }

  render(){
    return (
      <View>
        <Text>Dumb Ways to Learn React Native</Text>
      </View>
    )
  }
}
