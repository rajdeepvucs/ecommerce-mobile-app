import React, { useRef,useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput } from 'react-native';
import Banner from './Banner';
import Header from './Header';
import Category from './Category';
import PopularProductsSection from './PopularProductsSection';
import NewArrivalProduct from './NewArrivalProduct';
import { MagnifyingGlassCircleIcon } from 'react-native-heroicons/outline';
import NewPopularProductList from './NewPopularProductList';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const [searchText, setSearchText] = useState('');
  const flatListRef = useRef(null);
const navigation=useNavigation()
  const renderContent = () => (
    <View style={styles.contentContainer}>
      <Header />
      {/* <Subheader /> */}
      <Banner />
      {/* Serarch bar */}
      <View className="mx-4 flex-row items-center rounded-full bg-black/5 p-{6px}">
<TextInput
placeholder='Search  Product'
placeholderTextColor={'gray'}
style={{fontSize:14}}
className="flex-1 text-base mb-1 pl-3 tracking-wider"
value={searchText} // Bind the value to state
        onChangeText={setSearchText} // Update state on text change
/>
<View className="bg-white rounded-full p-1">
  <MagnifyingGlassCircleIcon size={30}strokeWidth={2} color="gray" onPress={()=>{navigation.navigate('Search',{ searchText })}}/>
</View>
      </View>
      <Category />
      <NewPopularProductList />
      <Text style={styles.popularProductsTitle}>Popular Products</Text>
    </View>
  );

  const renderFooter = () => (
    <>
      <PopularProductsSection />
      <NewArrivalProduct /> 
    </>
  );

  return (
    <FlatList
      ref={flatListRef}
      data={[]}
      renderItem={null}
      ListHeaderComponent={renderContent}
      ListFooterComponent={renderFooter} 
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16} 
      decelerationRate="fast" 
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 20,
  },
  popularProductsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingHorizontal: 15,
  },
});

export default Home;
