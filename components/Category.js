import {
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
  } from 'react-native';
  import React, {useEffect, useState} from 'react';
  import {useNavigation} from '@react-navigation/native';
import Animated,{FadeInDown} from 'react-native-reanimated'
import axios from 'axios'
  
  const Category = () => {
    const navigation = useNavigation();
    // const [category1, setCategory] = useState();
    const category = [
        {
          id: 1,
          title: 'HomeMadeFood',
          image: 'https://t4.ftcdn.net/jpg/05/42/85/63/360_F_542856397_q4zEV71ICpq7jRsRlTtAlq0V10QyVPxo.jpg',
        },
        {
          id: 2,
          title: 'HomeMadeMasala',
          image: 'https://i0.wp.com/foodtrails25.com/wp-content/uploads/2021/08/Dabeli-Masala-main.jpg?resize=360%2C361&ssl=1',
        },
        {
          id: 3,
          title: 'StationaryItem',
          image: 'https://assignmentpoint.com/wp-content/uploads/2019/04/Stationery-Items-for-Employees.jpg',
        },
        {
          id: 4,
          title: 'Art & Craft',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQEE5DAjorsoGRHpRA1AVgvNqSgIRXF90HrQ&s',
        },
      ];
      
  
    // useEffect(() => {
    //   const getData=async()=>{
    //   const res=  await axios.get('http://192.168.1.23:3000/api/allcategory')

    //   setCategory(res.data)


    //   }
    //   getData()
    // }, []);

  
    return (
      <Animated.View entering={FadeInDown.duration(500).springify()}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.conatiner}>
        {category?.length &&
          category.map(item => (
            <TouchableOpacity
            onPress={() => navigation.navigate(item.title.replace(/\s+/g, '').toUpperCase())}
              key={item.id}
              style={styles.category}>
              <Image
                // source={{uri:`http://192.168.1.23:3000/uploads/category/${item.categoryImage}` }}
                source={{uri:item.image}}
                style={styles.imgStyle}
              />
              <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
      </Animated.View>
    );
  };
  
  const styles = StyleSheet.create({
    conatiner: {
      backgroundColor: '#F8F7F4',
      padding: 10,
      marginBottom:10
    },
    imgStyle: {
      height: 80,
      width: 80,
      borderRadius:50
    },
    title: {
        fontWeight:'bold',
      fontSize: 16,
      color: '#2c4341',
    },
    category: {
      paddingHorizontal: 8,
      alignItems: 'center',
      cursor:'pointer'
    },
  });
  
  export default Category;