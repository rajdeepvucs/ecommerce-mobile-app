import { StyleSheet, Text, View ,Pressable,Image} from 'react-native'
import React from 'react'
import MasonryList from '@react-native-seoul/masonry-list';
import Animated,{  FadeInDown } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { SharedElement } from 'react-native-shared-element';
const popularProducts = [
    {
      id: 51,
      name: 'Watch',
      productImage: 'https://m.media-amazon.com/images/I/71VxRe7HeKL._AC_UY1000_.jpg',
      description: 'Stylish wristwatch with a sleek design, perfect for casual and formal wear.',
      rating: 4.5,
    price: 1200,
      discountPrice: 999,
      
    },
    {
      id: 52,
      name: 'Product 2',
      productImage: 'https://m.media-amazon.com/images/I/71VxRe7HeKL._AC_UY1000_.jpg',
      description: 'Elegant watch with a durable strap and a high-precision mechanism.',
      rating: 4.0,
    price: 1500,
      discountPrice: 1199,
    },
    {
      id: 53,
      name: 'Product 3',
      productImage: 'https://m.media-amazon.com/images/I/71VxRe7HeKL._AC_UY1000_.jpg',
      description: 'Classic watch featuring a minimalist design and water-resistant build.',
      rating: 4.0,
      price: 1500,
      discountPrice: 1199,
    },
    {
      id: 54,
      name: 'Product 4',
      productImage: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ML733_VW_34FR+watch-case-41-stainless-gold-s9_VW_34FR+watch-face-41-stainless-gold-s9_VW_34FR?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1694507905569',
      description: 'Premium smartwatch with advanced health tracking features and a sleek gold finish.',
      rating: 4.5,
      price: 1500,
      discountPrice: 1199,
    },
    {
      id: 55,
      name: 'Product 5',
      productImage: 'https://www.cnet.com/a/img/resize/770007077c38361ca13ef0b0aa4c208f88fa2053/hub/2023/09/20/9e9b8e2b-04ee-4087-b819-c99ec8bbc980/apple-watch-ultra-2-7.jpg?auto=webp&fit=crop&height=1200&width=1200',
      description: 'Rugged smartwatch designed for outdoor adventures with advanced GPS and long battery life.',
      rating: 5.0,
      price: 1500,
      discountPrice: 1199,
    }
  ];
const NewPopularProductList = () => {
    const navigation=useNavigation()
  return (
    <View className="mx-4 space-y-3">
      <Text style={{fontSize:24}}className="text-neutral-600 font-semi-bold">Popular Product</Text>
   
   <View>
   <MasonryList
  data={popularProducts}
  keyExtractor={(item) => item.id}
  numColumns={2}
  showsVerticalScrollIndicator={false}
  renderItem={({item,i}) => <CardItem item={item} index={i} navigation={navigation}/>}
//   refreshing={isLoadingNext}
//   onRefresh={() => refetch({first: ITEM_CNT})}
  onEndReachedThreshold={0.1}
//   onEndReached={() => loadNext(ITEM_CNT)}
/>
    </View>
     </View>
  )
}

export default NewPopularProductList

const CardItem=({item,index,navigation})=>{
    let isEven=index%2==0;
    return(
        <Animated.View entering={FadeInDown.delay(100*index).duration(1000).springify().damping(12)}>
           <Pressable
           style={{width:'100%',paddingLeft:isEven?0:8,paddingRight:isEven?8:0}}
           className="flex justify-center mb-4 space-y-1" onPress={()=>{navigation.navigate('ProductDetails', { product:item })}}>
            <SharedElement id={`product.${item.id}.photo`}>
            <Image source={{uri:item.productImage}}
            style={{width:"100%",height:index%3==0?200:300,borderRadius:35}}
            className="bg-black/5"
            
            resizeMode='cover'/>
            </SharedElement>
        
            <Text style={{fontSize:20}} className="font-semibold ml-2 text-neutral-600">{item.name}</Text>
         </Pressable>
        </Animated.View>
    )
}