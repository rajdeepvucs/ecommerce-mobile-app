import { View, Text, ScrollView ,Image, TouchableOpacity,StatusBar} from 'react-native'
import React, { useState, } from 'react'
import { ChevronLeftIcon, MinusIcon, StarIcon} from "react-native-heroicons/outline";
import { HeartIcon, PlusIcon} from "react-native-heroicons/solid";
import { useNavigation } from '@react-navigation/native';
import Animated,{ FadeIn, FadeInDown } from 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, incrementQuantity, decrementQuantity } from '../Redux/cartSlice';
import { SharedElement } from 'react-native-shared-element';
const NewProductDetails = ({route}) => {
    const {product}=route.params;
const[isFavourate,setIsFavourite]=useState(false)
const cartItems = useSelector((state) => state.cart.items);
const existingItem = cartItems.find((cartItem) => cartItem.id === product.id);
const navigation=useNavigation()
const dispatch = useDispatch();
const addToCart = (item) => {
  dispatch(addItemToCart(item));
};

const incrementItem = (product) => {
  console.warn('hi')
  dispatch(incrementQuantity(product.id));
};

const decrementItem = (product) => {
  dispatch(decrementQuantity(product.id));
};
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content"  />
    <ScrollView
    className="bg-white flex-1"
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{paddingBottom:30}}
    >
       
        <View className="flex-row justify-center ">
          {/* <SharedElement id={`product.${product.id}.photo`}> */}
<Image source={{ uri:`http://192.168.1.23:3000/uploads/${product.productImage} `}} style={{width:"98%",height:350,borderRadius:53,borderBottomLeftRadius:40,borderBottomRightRadius:40,mt:4}} resizeMode='cover' />

{/* </SharedElement> */}
        </View>
        {/* back botton */}
        <Animated.View entering={FadeIn.delay(200).duration(1000)} className="w-full absolute flex-row justify-between items-center pt-12">
<TouchableOpacity className="p-2 rounded-full ml-5 bg-black" onPress={()=>{navigation.goBack()}}>
    <ChevronLeftIcon size={18}strokeWidth={5} color="#fbbf24" />
</TouchableOpacity>
      
       
<TouchableOpacity className="p-2 rounded-full mr-5 bg-black" onPress={()=>{setIsFavourite(!isFavourate)}}>
    <HeartIcon size={18}strokeWidth={5} color= {isFavourate?"red":"#fbbf24" }/>
</TouchableOpacity>
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(300).duration(1000).springify().damping(12)} className="px-2 flex justify-between space-y-4 pt-8">
<Text style={{fontSize:18}} className="font-bold flex-1 text-neutral-700">{product.name}</Text>
<Text style={{fontSize:14}} className="font-medium flex-1 text-neutral-700">{product.description}</Text>
        </Animated.View>
        <Animated.View entering={FadeIn.delay(400).duration(1000)} className="flex-row justify-around bg-amber-300 rounded-3xl mx-4 mt-4 items-center w-16 space-y-1 p-1 px-2">
        <View style={{height:25,width:25}}className="bg-white rounded-full flex items-center justify-center">
                    <StarIcon size={25} strokeWidth={1.8} color="red" />
                </View>
                <View className="flex items-center py-1 space-y-1">
                    <Text style={{fontSize:14}} className="font-bold text-neutral-700">{product.rating}</Text>
                </View>
        </Animated.View>
        <Animated.View entering={FadeIn.delay(500).duration(1000)} className="flex-row justify-self-start mx-4 mt-4 space-x-2">
           
            
     
    <Text className="text-2xl text-red-900">MRP:</Text>
    

<Text  className="font-bold text-2xl text-rose-700  line-through  decoration-4 ">
      {product.price}
    </Text>
<Text className="font-bold text-2xl text-neutral-700 ">
      {product.discountPrice}
    </Text>

  
        </Animated.View>
 
<Animated.View entering={FadeIn.delay(500).duration(1000)}View className="flex-row justify-around py-2 space-y-1 px-4">
{!existingItem ?(  <TouchableOpacity className="rounded-full bg-indigo-900 p-3" onPress={() => addToCart(product)}>
    <Text className="text-white text-center">Add to Cart</Text>
  </TouchableOpacity>):(<View className="flex-row items space-x-4 border-gray-500 border rounded-full p-1 px-4">
<TouchableOpacity onPress={() => decrementItem(product)}>
  <MinusIcon size="20" strokeWidth={3} color={"grey"}/>
</TouchableOpacity>
<Text className="font-extrabold text-lg">{existingItem.quantity}</Text>
<TouchableOpacity onPress={() => incrementItem(product)}>
  <PlusIcon size="20" strokeWidth={3} color={"grey"}/>
</TouchableOpacity>
   </View>) }


  <TouchableOpacity className="rounded-full bg-teal-900 p-3" onPress={() => addToCart(product)}>
    <Text className="text-white text-center">Buy    Now</Text>
  </TouchableOpacity>
</Animated.View>
<View className='space-y-4'>
    <Text className="font-bold text-xl flex-1 text-neutral-700 ml-2">Features</Text>
<View className="space-y-4 ml-3">

</View>
</View>

    </ScrollView>
    </>
  )
}

export default NewProductDetails