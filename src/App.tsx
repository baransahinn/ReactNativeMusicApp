
import {View,SafeAreaView,Text,Button} from 'react-native';
import { useState } from 'react';



const App = ()=> {
  const [count, setCount] = useState(0);

  const countUp = () => {
     setCount(count + 1);
  }

  return (
    <SafeAreaView>
      <View>
        <Text>{count}</Text>
        <Button title='arttır' onPress={countUp}/>
      </View>
    </SafeAreaView>
  );

}


export default App;
