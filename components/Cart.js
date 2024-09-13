import { FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState,useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity } from '../Redux/cartSlice';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useFocusEffect } from '@react-navigation/native';

const Cart = () => {
  const [data, setData] = useState([]);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const datas = useRef([]);
  useFocusEffect(
    React.useCallback(() => {
      datas.current = cartItems; // Ensure this is current
      return () => {
        // No cleanup necessary here
      };
    }, [cartItems])
  );
  useEffect(() => {
    datas.current = cartItems;
  }, [cartItems]);
  useEffect(() => {
    setData(cartItems);
   
  
  }, [cartItems]);
// console.log("value",shouldAnimate)
useEffect(() => {
  data.current = cartItems;
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

  const ItemView = ({ item, index }) => {
    


    return (
      <Animated.View
        entering={shouldAnimate ? FadeInDown.delay(100 * index).duration(2000).springify().damping(12) : undefined}
        style={styles.productContainer}
      >
        <View style={styles.productDetailsContainer}>
          <Image
            source={{ uri: `http://192.168.1.23:3000/uploads/${item.productImage}` }}
            style={styles.productImage}
            onError={() => console.log(`Failed to load image: ${item.productImage}`)}
          />
          <View style={styles.productInfoContainer}>
            <Text style={styles.productTitle}>{item.name}</Text>
            <Text style={styles.mrp}>MRP: ₹{item.price}</Text>
            <Text style={styles.discountPrice}>₹{item.discountPrice}</Text>
            <View style={styles.buttonContainer}>
              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => decrementItem(item)} style={styles.quantityButton}>
                  <Text style={styles.buttonTextInc}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantityText}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => incrementItem(item)} style={styles.quantityButton}>
                  <Text style={styles.buttonTextInc}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      {cartItems.length > 0 ? (
        <FlatList
        
          data={data}
          renderItem={ItemView}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={styles.emptyCart}>
          <Text style={styles.emptyCartText}>No Items In Cart</Text>
        </View>
      )}

      <View style={styles.summaryContainer}>
        <Text style={styles.totalText}>Total: ₹{calculateTotalPrice()}</Text>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => navigation.navigate('Checkout')}
        >
          <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 60,
    flex: 1,
  },
  productContainer: {
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 10,
    width: Dimensions.get("screen").width - 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    padding: 10,
  },
  productDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: 80,
    height: 100,
    marginRight: 10,
  },
  productInfoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  mrp: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    color: '#888',
    marginBottom: 2,
  },
  discountPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e53935',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  quantityButton: {
    backgroundColor: '#0a74da',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 50,
  },
  buttonTextInc: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  summaryContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    width: Dimensions.get("screen").width - 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  checkoutButton: {
    backgroundColor: '#e53935',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  emptyCart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartText: {
    fontSize: 24,
    color: '#e53935',
  },
});
