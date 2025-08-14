
import {View,SafeAreaView,Text,Button,FlatList,Switch} from 'react-native';
import { useState } from 'react';


type Cafe = {
  id : number;
  name: string;
  isFavorite : boolean;
}

const data: Cafe[] = [
  { id: 0, name: 'cafe.exe', isFavorite: true },
  { id: 1, name: 'KafaKafe', isFavorite: false },
  { id: 2, name: 'BugG', isFavorite: false },
  { id: 3, name: 'Rock n code', isFavorite: true },
  { id: 4, name: 'do(drink)', isFavorite: false },
  { id: 5, name: 'esc', isFavorite: false }
];


const App = ()=> {
  const [cafeList, setCafeList] = useState(data);
  const [showOnlyFavorite , setshowOnlyFavorites] = useState(false)
  const onFavoriteChange =(isFavoriSelected: boolean)=>{
    setshowOnlyFavorites(isFavoriSelected)
    isFavoriSelected ? setCafeList(cafeList.filter(cafe => cafe.isFavorite))
    : setCafeList(data)
  }


  return (
    <SafeAreaView>
        <Switch value={showOnlyFavorite} onValueChange={onFavoriteChange}/>
        <FlatList
        keyExtractor={(item:Cafe)=>item.id.toString()}
        data={cafeList}
        renderItem={({item}:{item:Cafe})=> <Text style={{fontSize:25}}>{item.name}</Text>}
        
        />
    </SafeAreaView>
  );

}


export default App;
