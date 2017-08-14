import React, {Component} from 'react';
import {ListView, Text, View} from 'react-native';
import Anime from './components/Anime';

export default class MyAnimeList extends Component {

  animes = [
    'Boruto',
    'Boku no Hero Academia',
    'Dragon Ball Super',
    'Shingeki no Bahamut'
  ]

  constructor(){
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.animes)
    }
  }

  render(){
    return (
      <View>
        <Text>With DataSource:</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Anime anime={rowData}/>}
        />
        <Text>With maps:</Text>
        {this.animes.map((anime, key)=> <Text key={key}>{anime}</Text>)}
      </View>
    )
  }
}
