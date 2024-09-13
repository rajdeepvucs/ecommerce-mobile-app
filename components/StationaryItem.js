import { FlatList, Image } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions ,ActivityIndicator} from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, incrementQuantity, decrementQuantity } from '../Redux/cartSlice';
import Slider from '@react-native-community/slider';
import Animated,{  FadeInDown } from 'react-native-reanimated';
const StationaryItem = () => {

  const [filteredData, setFilteredData] = useState([]);
  const [minValue, setMinValue] = useState(0);
  const[data,setData]=useState([]);
  const navigate = useNavigation();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
const [loading,setLoading]=useState(false)
  const getData = async () => {
    try {
      // const res = await axios.get('https://mocki.io/v1/478f56d8-ce66-4720-80cb-d0bf705f149e');
      setLoading(true)
      const res = await axios.get('http://192.168.1.23:3000/api/getAllProducts');
   setData(res.data.filter(item =>item.category==='STATIONARY ITEMS'))
      setFilteredData(res.data.filter(item =>item.category==='STATIONARY ITEMS')); 
    } catch (error) {
      console.log(error);
    }
    finally{setLoading(false)}
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    filterData();
  }, [minValue]);

  const filterData = () => {
    const filtered = data.filter(item => item.discountPrice >= minValue);
    setFilteredData(filtered);
  };

  const addToCart = (item) => {
    dispatch(addItemToCart(item));
  };

  const incrementItem = (product) => {
    dispatch(incrementQuantity(product.id));
  };

  const decrementItem = (product) => {
    dispatch(decrementQuantity(product.id));
  };

  const ItemView = ({ item,index }) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    return (
      <Animated.View entering={FadeInDown.delay(100*index).duration(1000).springify().damping(12)} style={styles.productContainer}>
           <View style={styles.discountBadge}>
           <Text style={styles.discountText}>
  {Math.round((item.price - item.discountPrice) / item.price * 100)}% OFF
</Text>

  </View>
        <Image source={{ uri: `http://192.168.1.23:3000/uploads/${item.productImage}` }} style={styles.productImage} />
        <Text style={styles.productTitle}>{item.name}</Text>
        <Text style={styles.mrp}>MRP: ₹{item.price}</Text>
        <Text style={styles.discountPrice}>₹{item.discountPrice}</Text>
        <View style={styles.buttonContainer}>
          {existingItem ? (
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={() => decrementItem(item)} style={styles.quantityButton}>
                <Text style={styles.buttonTextInc}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{existingItem.quantity}</Text>
              <TouchableOpacity onPress={() => incrementItem(item)} style={styles.quantityButton}>
                <Text style={styles.buttonTextInc}>+</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity style={styles.button} onPress={() => addToCart(item)}>
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={[styles.button, styles.buyNowButton]}
            onPress={() => navigate.navigate('ProductDetails', { product: item })}
          >
            <Text style={styles.buttonText}>Details</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    );
  };

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', alignContent: 'center', padding: 10, marginBottom: 60 }}>
  {loading?(
 
 <ActivityIndicator size="large" color="#0000ff" />

):(<>
   <Slider
  style={{width: 200, height: 40}}
  minimumValue={0}
  maximumValue={1000}
  step={50}
  minimumTrackTintColor="#FFFFFF"
  maximumTrackTintColor="#000000"
  onValueChange={(value)=>{console.log(value) ,setMinValue(value)}}
/>
<Text style={{fontSize:14}}>Price:Above{minValue}</Text>
      <FlatList
        data={filteredData}
        renderItem={ItemView}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
</>)}

   

    </View>
  );
};

export default StationaryItem;

const styles = StyleSheet.create({
  flatListContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  productContainer: {
    backgroundColor: '#fff',
    marginBottom: 15,
    marginRight: 10,
    borderRadius: 10,
    width: Dimensions.get('screen').width/2 -20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  productImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
    height: 40,
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
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
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
  rangeText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  slider: {
    width: '90%',
    height: 40,
    marginVertical: 10,
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
