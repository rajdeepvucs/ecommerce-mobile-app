import { Image, StyleSheet, Text, View ,Dimensions} from 'react-native'
import React from 'react'
const width=Dimensions.get('screen').width
const ListItem = ({uri}) => {

  return (
    <Image source={uri} style={styles.image}   resizeMode="contain"/>
  )
}

export default ListItem

const styles = StyleSheet.create({
    image:{
        height:300,
        width:width,
     
        marginRight:8
    }
})
