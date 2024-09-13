import { View, Text, TouchableOpacity ,Image, ScrollView} from 'react-native'
import React,{useState,useEffect} from 'react'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity } from '../Redux/cartSlice';
import Animated, { FadeInDown } from 'react-native-reanimated';
const Profile = () => {
  const [data, setData] = useState([]);
  const navigation=useNavigation();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  useEffect(() => {
    setData(cartItems);
   
  
  }, [cartItems]);
  const incrementItem = (product) => {
    dispatch(incrementQuantity(product.id));
  };

  const decrementItem = (product) => {
    dispatch(decrementQuantity(product.id));
  };

  const calculateTotalPrice = () => {
    const total = cartItems.reduce((total, item) => total + item.discountPrice * item.quantity, 0);
    return total.toFixed(2);
  };

  return (
    <View className="flex-1 bg-white">
    <View className="relative py-4 shadow-sm ">
      <TouchableOpacity className="absolute rounded-full z-10 p-1 shadow top-5 left-2 bg-amber-600" onPress={()=>{navigation.goBack()}}>
      <ChevronLeftIcon size={24}strokeWidth={5} color="#ffff" />
      </TouchableOpacity>
    
    <View>
      <Text className="text-center font-bold text-xl">Your Cart</Text>
      </View>
    </View>
    {/* Delivery Time */}
    <View className="bg-rose-200 flex-row px-4 items-center justify-between">
      <Image  source={{uri:"https://img.freepik.com/free-vector/flat-delivery-boy-bike-background_23-2148157707.jpg?size=626&ext=jpg"}} className="w-20 h-20 rounded-full"/>
<Text className="flex-1 pl-4">Delivery with in 1-2 days</Text>
    </View>
    {/* cart */}
    {cartItems.length > 0 ?
    ( <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom:50}}
      className="bg-white pt-5">
  {
  data.map((item,index)=>{
    return(
      <Animated.View entering={ FadeInDown.delay(100 * index).duration(2000).springify().damping(12)}  key={index} className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-mb">
  <Image className="h-14 w-14 rounded-full"source={{uri:`http://192.168.1.23:3000/uploads/${item.productImage}`}}/>
  <Text className="flex-1 font-bold text-gray-700">{item.name}</Text>
  <Text className="font-semibold text-base">₹{item.discountPrice}</Text>
  <TouchableOpacity className="p-1 rounded-full bg-rose-400" onPress={() => decrementItem(item)} >
                    <Text className={"text-lg"} >-</Text>
                  </TouchableOpacity>
                  <Text >{item.quantity}</Text>
                  <TouchableOpacity className="p-1 rounded-full bg-lime-400" onPress={() => incrementItem(item)} >
                    <Text className={"text-lg"} >+</Text>
                  </TouchableOpacity>
      </Animated.View>
    )
  
  })
  }
      </ScrollView>):(<View className="flex-1 justify-center ">
        <Text className="text-4xl text-center text-amber-400" >No Items in Cart</Text>
      </View>)
   
}
    {/* Total */}
    <Animated.View entering={ FadeInDown.delay(100).duration(2000).springify().damping(12)}View className="bg-rose-200 p-6 px-8 rounded">
      <View className="flex-row justify-between">
        <Text className="text-gray-700">Subtotal:</Text>
<Text className="text-gray-700">{calculateTotalPrice()}</Text>
</View>
<View className="flex-row justify-between">
        <Text className="text-gray-700">Delivery Charge:</Text>
<Text className="text-gray-700">0</Text>
</View>
<View className="flex-row justify-between">
        <Text className="text-gray-700">Total:</Text>
<Text className="text-gray-700">{calculateTotalPrice()}</Text>
</View>
<TouchableOpacity className="p-3 rounded-full bg-amber-600 mt-2" onPress={()=>{navigation.navigate("Confirmation")}}>
  <Text className="text-white text-center font-bold text-lg">Order Now</Text>

</TouchableOpacity>
  
    </Animated.View>
    </View>
  )
}

export default Profile