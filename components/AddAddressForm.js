import { StyleSheet, Text, View ,Image, TextInput, TouchableOpacity} from 'react-native'

import React from 'react'
import Animated,{  FadeInDown, FadeInUp } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
const AddAddressForm = () => {
    const navigation=useNavigation()
  return (
      <View className=" flex-1 bg-white h-full w-full">
      

          <View className="flex-col  m-1 mt-10">
          <View className="bg-emerald-300  w-full  mb-2 ">
                 <Text className="text-center text-xl text-white">Add New Address</Text>
              </View>
              <View className="ml-0 mb-1">
              <Text className="text-sm text-blue-600">Full Name(First Name & Last Name)</Text>
              </View>
             
              <View className="bg-gray-200 rounded-2xl w-full p-1 mb-2 ">
                  <TextInput placeholder='Enter Your Name' placeholderTextColor={'black'} />
              </View>
              <View className="ml-0 mb-1">
              <Text className="text-sm text-blue-600">Mobile number</Text>
              </View>
              <View className="bg-gray-200 rounded-2xl w-full p-1 mb-2 ">
                  <TextInput placeholder='Mobile no' placeholderTextColor={'black'} />

              </View>
              <View className="ml-0 mb-1">
              <Text className="text-sm text-blue-600">Flat,House No,Building,Comapany</Text>
              </View>
            
              <View className="bg-gray-200 rounded-2xl w-full p-1 mb-2 ">
                  <TextInput  placeholderTextColor={'black'} />

              </View>
              <View className="ml-0 mb-1">
              <Text className="text-sm text-blue-600">Landmark</Text>
              </View>
              <View className="bg-gray-200 rounded-2xl w-full p-1 mb-2 ">
                  <TextInput placeholder='Eg near Police station' placeholderTextColor={'black'} />

              </View>
              <View className="ml-0 mb-1">
              <Text className="text-sm text-blue-600">Pincode</Text>
              </View>
              <View className="bg-gray-200 rounded-2xl w-full p-1 mb-2 ">
                  <TextInput placeholder='Enter Pincode' placeholderTextColor={'black'} />

              </View>
              <TouchableOpacity className="w-full bg-sky-400 p-3 rounded-2xl mt-8" >
                <Text className="text-bold text-white text-center">Add Address</Text>
            </TouchableOpacity>

          </View>
      </View>
 
  )
}

export default AddAddressForm

const styles = StyleSheet.create({})