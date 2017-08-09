import React from 'react';
import {View, Text} from 'react-native';
import Glass from './components/Glass';
import Cup from './components/Cup';

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
        <Cup/>
        <Glass/>
      </View>
    )
  }
}
