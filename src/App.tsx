
import {View,SafeAreaView,Text,Button,FlatList,Switch,StyleSheet} from 'react-native';
import { useEffect, useState } from 'react';
import music_data from './music-data.json';
import Card from './compenents/Card';
import SearchBar from './compenents/SearchBar';



const App = ()=> { 
   const [list , setList]= useState(music_data)
  const handleSearch = (text:string)=>{
    const filteredList =music_data.filter(song=>{
      const searcedText =text.toLowerCase()
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searcedText) > -1;

    })
    setList(filteredList);
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
         keyExtractor={(item) => item.id}
        data={list}
        renderItem={({item})=> <Card song={item}/>} 
      />    
    </SafeAreaView>
  );

}

export default App;

const styles = StyleSheet.create({
  container: {
    flex : 1,
  },
  separator:{
    borderWidth : 1,
    color:'#e0e0e0'
  },
});

