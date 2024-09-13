import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import Animated,{  FadeInDown,FadeInUp } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
const Header = () => {
  
const navigation=useNavigation()
  
  return (
    <View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#ffffff', '#f2f2f2', '#e6e6e6']}
        style={styles.container}>
              <Animated.Image entering={FadeInUp.delay(400).duration(1000).springify().damping(12)}
              
                source={require('../../ProjectName/assets/logo.jpg')}
                style={[styles.logo, ]}
                
              />
   <Animated.Text  entering={FadeInDown.delay(300).duration(1000).springify().damping(12)}style={[styles.title]}>
        SWAYAMPURNA
      </Animated.Text>
      <TouchableOpacity onPress={()=>{navigation.openDrawer();}}>
      <Image
                source={require('../../ProjectName/assets/drawer.png')}
                style={styles.imgStyle}
              />
              </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height:80
  },
  title:{
    fontSize:22,
    fontWeight:'bold',

  },
  imgStyle:{
    height:60,
    width:60
  },
  logo:{
    height:90,
    width:100,
    borderRadius:50,
    elevation:3,
    objectFit:'fill'
  }
 
});

export default Header;