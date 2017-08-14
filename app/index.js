import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
// import MyAnimeList from './MyAnimeList';
import NativeBaseAnatomy from './components/NativeBaseAnatomy';

export default class Index extends React.Component {

  render(){
    return (
      <View style={styles.container}>
        <NativeBaseAnatomy/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.2,
    backgroundColor: "green"
  },
  footer: {
    flex: 3,
    backgroundColor: "blue",
    justifyContent: "center",
  },
  footerText: {
    alignSelf: 'center',
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20
  }
});
