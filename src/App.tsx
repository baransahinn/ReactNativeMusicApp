
import {View,SafeAreaView,Text,Button,FlatList,Switch} from 'react-native';
import { useEffect, useState } from 'react';





const App = ()=> {
   const [number , setNumber] = useState(0);
   
    
   useEffect(()=>console.log("number updated") ,[number])


  return (
    <SafeAreaView>
      <Text>{number}</Text>
      <Button title='up' onPress={()=>setNumber(number+1)}/>
        
      
    </SafeAreaView>
  );

}


export default App;
