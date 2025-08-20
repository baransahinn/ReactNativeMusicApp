import React from 'react'
import { View,TextInput } from 'react-native'
import styles from './SearchBar.styles'

 

const SearchBar= (props:any) => {
   
  return (
    <View style={styles.container}>
        <TextInput placeholder='Ara...' onChangeText={props.onSearch}/>
    </View>
  )
}

export default SearchBar