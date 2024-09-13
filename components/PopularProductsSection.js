import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { addItemToCart, removeItemFromCart,incrementQuantity,decrementQuantity } from '../Redux/cartSlice'; 
import { useNavigation } from '@react-navigation/native';
import { useDispatch,useSelector } from 'react-redux';
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
;

const PopularProductItem = ({ product }) => {
  const cartItems = useSelector(state => state.cart.items);
  const existingItem = cartItems.find(item => item.id === product.id);
  const dispatch=useDispatch()
  const addToCart=(item)=>{
    dispatch(addItemToCart(item))
  }
  const incrementItem = () => {
    dispatch(incrementQuantity(product.id));
  };

  const decrementItem = () => {
    dispatch(decrementQuantity(product.id));
  }
  const navigate=useNavigation();
  return (
    <View style={styles.productContainer}>
      <View style={styles.discountBadge}>
    <Text style={styles.discountText}>10% OFF</Text> 
  </View>
      <Image source={{ uri: product.productImage }} style={styles.productImage} 
  sharedTransitionTag="sharedTag"/>
      <Text style={styles.productTitle}>{product.title}</Text>
  
      <Text style={styles.mrp}>MRP: ₹{product.price}</Text>
      <Text style={styles.discountPrice}>₹{product.discountPrice}</Text>
      <View style={styles.buttonContainer}>
      {existingItem ? (
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={decrementItem} style={styles.quantityButton}>
              <Text style={styles.buttonTextInc}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{existingItem.quantity}</Text>
            <TouchableOpacity onPress={incrementItem} style={styles.quantityButton}>
              <Text style={styles.buttonTextInc}>+</Text>
            </TouchableOpacity>
          </View>
        ) :
      (  <TouchableOpacity style={styles.button} onPress={()=>{addToCart(product)}}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      )
      }
        <TouchableOpacity style={[styles.button, styles.buyNowButton]} onPress={()=>{navigate.navigate('ProductDetails', { product })}}>
          <Text style={styles.buttonText}> Details     </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const PopularProductsSection = () => {
  return (
    <View style={{justifyContent:'center',alignItems:'center',alignSelf:'center',alignContent:'center', padding:10}} >
    <FlatList
      data={popularProducts}
      renderItem={({ item }) => <PopularProductItem product={item} />}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.flatListContainer}
    />
    </View>
  );
};

export default PopularProductsSection;

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

  },
  discountBadge: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'red',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
    zIndex: 1,
  },
  discountText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
