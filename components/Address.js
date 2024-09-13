import { StyleSheet, Text, View, TouchableOpacity, Pressable, ScrollView, } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';
import { CheckIcon, ChevronLeftIcon, MapPinIcon } from 'react-native-heroicons/outline';
import { BottomModal, ModalContent, SlideAnimation } from 'react-native-modals';
const Address = () => {
    const navigation = useNavigation()
    const [isModalVisible, setModalVisible] = useState(false);
    return (
        <>
            <View className="flex-1  bg-white">
                {/* <Animated.View entering={FadeIn.delay(200).duration(1000)} className="w-full absolute flex-row justify-first items-center pt-1">
                    <TouchableOpacity className="p-2 rounded-full ml-5 bg-black" onPress={() => { navigation.goBack() }}>
                        <ChevronLeftIcon size={18} strokeWidth={5} color="#fbbf24" />
                    </TouchableOpacity>
                    <View className="flex-1 items-center">
                        <Text className="text-3xl text-center">Address</Text>
                    </View>
                </Animated.View> */}
                <Pressable className="w-full flex-row justify-between items-center bg-fuchsia-200 p-2 mt-14" onPress={() => setModalVisible(!isModalVisible)}>
                    <View className="flex-row items-center">
                        <MapPinIcon size={20} strokeWidth={1} color="#eb4034" />
                        <Text className="text-base">Rajdeep Das Siliguri 712404 W.B</Text>
                    </View>
                    <View className="ml-auto">
                        <CheckIcon size={20} strokeWidth={1} color="#eb4034" />
                    </View>
                </Pressable>


            </View>
            <BottomModal onBackdropPress={() => { setModalVisible(!isModalVisible) }}
                swipeDirection={['up', 'down']} // can be string or an array
                swipeThreshold={200} // default 100>
                modalAnimation={new SlideAnimation({
                    slideFrom: 'bottom',
                })}
                onHardWareBackPress={() => setModalVisible(!isModalVisible)}
                visible={isModalVisible}
                onTouchOutside={() => { setModalVisible(!isModalVisible) }}
            >
                <ModalContent className="w-full h-3/4">
  <View className="mb-1">
    <Text className="text-base font-semibold text-center">Choose Your Location</Text>
    <Text className="text-center text-sm">Select a delivery location to see product availability</Text>
  </View>
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    <Pressable
    onPress={()=>{ setModalVisible(false);navigation.navigate('Add-Address')}}
      style={{
        height: 140,
        width: 140,
        marginTop: 10,
        borderWidth: 1,
        justifyContent: 'center', // Center the content vertically
        alignItems: 'center', // Center the content horizontally
        padding: 10, // Add some padding for better spacing
        
      }}
      className="bg-amber-600"
    >
      <Text className="text-center">Add an address or Pickup Point</Text>
    </Pressable>
  </ScrollView>
  <View className="flex-col space-y-1">
    <View className="flex-row">
    <MapPinIcon size={20} strokeWidth={1} color="#eb4034" />
    <Text className="text-blue-400">Enter Indian PinCode</Text>
    </View>
    <View className="flex-row">
    <MapPinIcon size={20} strokeWidth={1} color="#eb4034" />
    <Text className="text-blue-400">use My Current Location</Text>
    </View>
 
  </View>
</ModalContent>

            </BottomModal>
        </>
    )
}

export default Address

const styles = StyleSheet.create({})