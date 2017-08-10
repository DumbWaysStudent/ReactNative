import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default class Index extends React.Component {

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Header</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Footer</Text>
        </View>
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
