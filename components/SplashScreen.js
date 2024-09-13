// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
const SplashScreen = ({ navigation }) => {
  const ring1padding = useSharedValue(0);
  const ring2padding = useSharedValue(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('MainApp');
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, [navigation]);
  useEffect(()=>{
    ring1padding.value=0;
    ring2padding.value=0;
    setTimeout(()=>{ring1padding.value=withSpring(ring1padding.value+35)},100)
    setTimeout(()=>{ring2padding.value=withSpring(ring2padding.value+35.5)},300)

  },[])

  return (
    <View className="flex-1 items-center justify-center space-y-10 bg-amber-400">
    <StatusBar translucent backgroundColor="transparent" barStyle="light-content"  />
      <Animated.View className="bg-white/20 rounded-full" style={{padding:ring2padding}}>
        <Animated.View className="bg-white/20 rounded-full"style={{padding:ring1padding}}>
        <Image source={require('../assets/logo.jpg')} style={styles.image} />
        
        </Animated.View>
      </Animated.View>
      <View className="flex items-center space-y-2">
      <Text className='font-bold text-white tracking-widest text-lg'>SWAYAMPURNA</Text>
      <Text className='font-medium text-white  text-xs'>Shopping with us for better quality and best price</Text>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({

  image: {
    width: 150,
    height: 150,
    objectFit:"fill"
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default SplashScreen;
