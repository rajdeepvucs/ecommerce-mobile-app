import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import React, { useRef, useEffect } from 'react';
import ListItem from './ListItem';
import { sampleData } from './Data';

const Banner = () => {
  const flatListRef = useRef(null);
  let currentIndex = 0;

  useEffect(() => {
    const intervalId = setInterval(() => {
      currentIndex += 1;
      if (currentIndex >= sampleData.length) {
        currentIndex = 0;
      }
      flatListRef.current.scrollToIndex({ index: currentIndex, animated: true });
    }, 3000); // Change the interval time (3000ms) as needed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        ref={flatListRef}
        data={sampleData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <ListItem uri={item.image} />}
      />
    </SafeAreaView>
  );
};

export default Banner;

const styles = StyleSheet.create({});
