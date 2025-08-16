
import {View,SafeAreaView,Text,Button,FlatList,Switch} from 'react-native';
import { useEffect, useState } from 'react';



const App = ()=> {
   const [helloFlag , sethelloFlag] = useState(true);
   
    const updateFlag =()=>{
       sethelloFlag(!helloFlag)
    }



  return (
    <SafeAreaView>
      <Text>Hello lifecycle</Text>
      <Button title='Up' onPress={updateFlag}/>
      {helloFlag && <Hello/>}
    </SafeAreaView>
  );

}


export default App;

const Hello = ()=>{
   
  useEffect(()=>{
    console.log('useEffect');
    return ()=> {
      console.log("finis")
    }
  },[])
   return (
    <View>
      <Text>I am Hello Compenent</Text>
    </View>
   );
}