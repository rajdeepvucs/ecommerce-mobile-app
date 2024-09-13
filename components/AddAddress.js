import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ArrowRightCircleIcon } from 'react-native-heroicons/solid'
import { MapPinIcon, PencilIcon, TrashIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'

const AddAddress = () => {
  const navigation=useNavigation();
  return (
   <ScrollView showsVerticalScrollIndicator={false} className="mt-15">
    <Text className="text-2xl text-center"> Choose Your Address</Text>
    <Pressable className="flex-row justify-between w-full-10 mt-2 bg-cyan-200 border rounded-full m-3 p-5" onPress={()=>{navigation.navigate('Add-Address-Form')}}>
        <Text>Add Address</Text>
<ArrowRightCircleIcon size={24} strokeWidth={1} color="#eb4034"/>
    </Pressable>
  <Pressable className="flex-col item-center m-2 border">
    <View className="flex-row ">
    <Text className="text-lg font-bold px-3">Rajdeep Das</Text>
    <MapPinIcon size={24} strokeWidth={1.5} color={"blue"} />
    </View>
    
    <Text className="text-base font-semibold px-3">12,R.N Bose Road Near Indoor Stadium</Text>
    <Text className="text-base font-semibold px-3">W.B ,India</Text>
    <Text className="text-base font-semibold px-3">Pin:712404</Text>
    <Text className="text-base font-semibold px-3">Mobile:9749653181</Text>
<View className="flex-row justify-around">
  <PencilIcon size={24} strokeWidth={1} color={"blue"} onPress={()=>{console.warn("first")}}/>
  <TrashIcon size={24} strokeWidth={1} color={"red"}/>
  <Pressable className="border"><Text className="text-lg text-blue-600">Set As Default</Text></Pressable>

</View>


  </Pressable>

   </ScrollView>
  )
}

export default AddAddress

const styles = StyleSheet.create({})