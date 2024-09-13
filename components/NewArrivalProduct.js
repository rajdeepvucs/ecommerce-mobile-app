import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { addItemToCart, removeItemFromCart,incrementQuantity,decrementQuantity } from '../Redux/cartSlice'; 
import { useNavigation } from '@react-navigation/native';
import { useDispatch,useSelector } from 'react-redux';
const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ];


const NewArrivalProductItem = ({ product }) => {
  
  return (
    <View style={styles.productContainer}>
      <Image source={{ uri: product.img }} style={styles.productImage} />
      <Text style={styles.productTitle}>{product.title}</Text>
  
    
    </View>
  );
};

const NewArrivalProduct = () => {
  return (
    <>
    <View><Text style={{fontSize:24, fontWeight: 'bold', marginBottom: 10, paddingHorizontal: 15,}}>New Arrival</Text></View>
    <View style={{justifyContent:'center',alignItems:'center',alignSelf:'center',alignContent:'center', padding:10}} >
    <FlatList
      data={itemData}
      renderItem={({ item }) => <NewArrivalProductItem product={item} />}
      keyExtractor={(item) => item.title}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.flatListContainer}
    />
    </View>
    </>
  );
};

export default NewArrivalProduct;

const styles = StyleSheet.create({
  flatListContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    
  },
  productContainer: {
    backgroundColor: '#fff',
    marginBottom: 15, // Adjust the margin for spacing between items
    marginRight: 10,  // Adjust the margin for spacing between columns
    borderRadius: 10,
    width: '48%', // Adjust the width to fit two columns within the screen
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  productImage: {
    width: '100%',
    height: 120, // Adjust height to fit better in the layout
    borderRadius: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap:30,
    paddingHorizontal:10

  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    width:'90%'
    
  },
  mrp: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    color: '#888',
  },
  discountPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e53935',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#0a74da',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buyNowButton: {
    backgroundColor: '#e53935',
  },
  buttonText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  buttonTextInc:{
    color:'#000',
    fontSize:20,
    fontWeight:'800'

  }
});
