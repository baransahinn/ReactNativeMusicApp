import React from 'react'
import { Text ,View,StyleSheet,Image} from 'react-native'
import styles from './Card.styles'

type Song ={ 
    id:string,
    title: string,
    artist:string,
    album:string,
    year:number,
    isSoldOut:boolean,
    imageUrl:string,

}
type CardProps ={
  song:Song
}

const Card:React.FC<CardProps>=({song})=> {
  const { title, artist, album, year, isSoldOut, imageUrl } = song;
  
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: imageUrl}}/>

     <View style={styles.innerContainer}>

        <Text style={styles.title}>{title}</Text>

        <View style={styles.contentContainer}>
        <View style={styles.infoContainer}>
          <Text>{artist}</Text>
          <Text style={styles.year}>{year}</Text>
        </View>
        {isSoldOut && <View style={styles.soldoutContainer}>
          <Text style={styles.soldoutTitle}>TÜKENDİ</Text>
        </View>}
        </View>

       </View>

    </View>
  )
}

export default Card