import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, incrementQuantity, decrementQuantity } from '../Redux/cartSlice';
const ProductDetails = ({ route }) => {
  const { product } = route.params;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const existingItem = cartItems.find((cartItem) => cartItem.id === product.id);
  const addToCart = (item) => {
    dispatch(addItemToCart(item));
  };

  const incrementItem = (product) => {
    dispatch(incrementQuantity(product.id));
  };

  const decrementItem = (product) => {
    dispatch(decrementQuantity(product.id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Product Details</Text>
      <View style={[styles.card,styles.cardElevation]}>
      <Image source={{ uri: `http://192.168.1.23:3000/uploads/${product.productImage}` }} style={styles.productImage} />
      <View style={styles.cardBody}>
      <Text style={styles.productTitle}>{product.name}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
      <Text style={styles.mrp}>MRP: ₹{product.price}</Text>
      <Text style={styles.discountPrice}>₹{product.discountPrice}</Text>
    <View style={{paddingVertical:10}}>
        <AirbnbRating reviews={['']} defaultRating={product.rating} isDisabled selectedColor='red' size={25} showRating={true} ratingContainerStyle={{flexDirection: 'row',backgroundColor:'#fff',paddingBottom:10,justifyContent: 'flex-start',height:40,}}/>
        </View>
        <View style={styles.btnview}>
        {existingItem ? (
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={() => decrementItem(product)} style={styles.quantityButton}>
                <Text style={styles.buttonTextInc}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{existingItem.quantity}</Text>
              <TouchableOpacity onPress={() => incrementItem(product)} style={styles.quantityButton}>
                <Text style={styles.buttonTextInc}>+</Text>
              </TouchableOpacity>
            </View>
          ) : (
     
        <TouchableOpacity style={[styles.btn, { backgroundColor: "#6AB04A" }]} onPress={()=>(addToCart(product))}><Text style={styles.btntext}>AddToCart</Text></TouchableOpacity>
    
       )}
        <TouchableOpacity style={[styles.btn,{ backgroundColor: '#00CCCD' }]}>
  <Text style={styles.btntext}>Buy Now</Text>
</TouchableOpacity>

      </View>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFO',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    alignSelf:'center',
    marginBottom:80


  },
  productImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom:8
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',

    marginBottom:6,
    color:'#000000'
  },
  mrp: {
    fontSize: 22,
    textDecorationLine: 'line-through',
    color: '#E71C23',
  },
  discountPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
  },
  rating: {
    fontSize: 18,
    marginTop: 10,
  },
  headingText:{
    fontSize:24,
    fontWeight:'bold',
    marginBottom:8,
    marginHorizontal:14,

  },
  card:{
    width:350,
    height:600,
    borderRadius:6,
    marginHorizontal:14,
    marginVertical:12,
   
  },
  cardElevation:{
    backgroundColor:'#FFFFFF',
    elevation:3,
    shadowOffset:{height:1,width:1}
  },
  cardBody:{flex:1,
    flexGrow:1,
    paddingHorizontal:12
  },
  productDescription:{
    color:"#242B2E",
    fontSize:20,
    marginBottom:6,
    marginTop:6,
    flexShrink:1

  },
  btn:{
    height:50,
    width:150,
    cursor:'pointer',
 
    borderRadius:20,
    textAlign:'center'

  },
  btntext:{
    textAlign:'center',
    fontSize:24,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  btnview:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:2
  
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 30,
    paddingHorizontal: 10,
  },
  buttonTextInc: {
    color: '#000',
    fontSize: 20,
    fontWeight: '800',
  },
});

export default ProductDetails;
