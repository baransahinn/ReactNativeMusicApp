
import {View,SafeAreaView,Text,Button,FlatList,Switch,StyleSheet} from 'react-native';
import { useEffect, useState } from 'react';
import music_data from './music-data.json';
import Card from './compenents/Card';



const App = ()=> {
  


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
      <FlatList
         keyExtractor={(item) => item.id}
        data={music_data}
        renderItem={({item})=> <Card song={item}/>}  
      />
      </View>
        
     
 
    </SafeAreaView>
  );

}

export default App;

const styles = StyleSheet.create({
  container: {
    flex : 1,
  },
});

