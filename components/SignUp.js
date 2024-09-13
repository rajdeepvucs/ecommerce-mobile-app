import { StyleSheet, Text, View ,Image, TextInput, TouchableOpacity} from 'react-native'
import { StatusBar } from 'react-native'
import React from 'react'
import Animated,{  FadeInDown, FadeInUp } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
const SignUp = () => {
    const navigation=useNavigation()
  return (
    <View className="bg-white h-full w-full">
         <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
     <Image className="h-full w-full absolute" source={require("../assets/background.jpg")}/>
     <View className="flex-row justify-around w-full absolute">
     <Animated.View entering={FadeInUp.delay(200).duration(1000).springify()}>
          <Image className="h-[255] w-[90] opacity-50" source={require("../assets/light.jpg")} />
        </Animated.View>
        <Animated.View entering={FadeInUp.delay(400).duration(1000).springify()}>
          <Image className="h-[160] w-[65] opacity-50" source={require("../assets/light.jpg")} />
        </Animated.View>
     </View>
     <View className="h-full w-full flex justify-around pt-80 pb-10">
        <View className="flex items-center">
            <Animated.Text entering={FadeInUp.duration(1000).springify()}className="text-white font-bold  tracking-wider text-5xl">SignUp</Animated.Text>
        </View>
     
     <View className="flex items-center mx-4 space-y-4">
     <Animated.View entering={FadeInDown.duration(1000).springify()}className="bg-gray-200 p-1 rounded-2xl w-full">
            <TextInput placeholder='Enter UserName' placeholderTextColor={'black'}/>
        </Animated.View>
        <Animated.View entering={FadeInDown.duration(1000).springify()}className="bg-gray-200 p-1 rounded-2xl w-full">
            <TextInput placeholder='Enter Email' placeholderTextColor={'black'}/>
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className="w-full">
            <TouchableOpacity className="w-full bg-sky-400 p-3 rounded-2xl mb-3" >
                <Text className="text-bold text-white text-center">SignUp</Text>
            </TouchableOpacity>
        </Animated.View>
        <Animated.View entering={FadeInDown.duration(1000).springify()}className="flex-row justify-center">
            <Text className="text-white text-xl font-normal">Already Registered?</Text>
            <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
                <Text className="text-sky-600   text-2xl font-normal">Login</Text>
            </TouchableOpacity>
        </Animated.View>
     </View>
    </View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({})