import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class Index extends React.Component {

  handleClick(myName){
    console.log('My name is ' + myName);
  }

  render(){
    const myName = "Ega Wachid Radiegtya";

    return (
      <View>
        <Text>Please Click Button Below</Text>
        <TouchableOpacity onPress={()=> this.handleClick(myName)}>
          <Text>Click</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
