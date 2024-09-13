// MainApp.js
import React from 'react';

import { useSelector } from 'react-redux';
import CustomDrawerContent from './CustomDrawerContent';
import Home from './Home';
import ProductDetails from './ProductDetails';
import HomeMadeFood from './HomeMadeFood';
import HomeMadeMasala from './HomeMadeMasala';
import Cart from './Cart';
import Profile from './Profile';
import HomeIcon from '../assets/home.png';
import CartIcon from '../assets/online-shopping.png';
import ProfileIcon from '../assets/people.png';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import StationaryItem from './StationaryItem';
import ArtCraft from './ArtCraft';
import NewProductDetails from './NewProductDetails';
import SearchProductScreen from './SearchProductScreen';
import Login from './Login';
import SignUp from './SignUp';
import Address from './Address';
import AddAddress from './AddAddress';
import AddAddressForm from './AddAddressForm';
import Confirmation from './Confirmation';
import {
  createSharedElementStackNavigator
} from 'react-navigation-shared-element'; // Import the Shared Element Stack Navigator

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="ProductDetails" component={NewProductDetails} options={{ headerShown: false }}
        />
      
      <Stack.Screen name="HOMEMADEFOOD" component={HomeMadeFood} options={{ title: 'Home Made Food' }}  />
      <Stack.Screen name="HOMEMADEMASALA" component={HomeMadeMasala} options={{ title: 'Home Made Masala' }}  />
      <Stack.Screen name="STATIONARYITEM" component={StationaryItem} options={{ title: 'Stationary Item' }}  />
      <Stack.Screen name="ART&CRAFT" component={ArtCraft} options={{ title: 'Art & Craft' }}  />
      <Stack.Screen name="Cart" component={Cart} options={{ title: 'Cart' }}  />
      <Stack.Screen name="Search" component={SearchProductScreen} options={{ title: 'Product' }}  />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
      <Stack.Screen name="Address" component={Address} options={{ headerShown: false }} />
      <Stack.Screen name="Add-Address" component={AddAddress} options={{ headerShown: false }} />
      <Stack.Screen name="Add-Address-Form" component={AddAddressForm} options={{ headerShown: false }} />
      <Stack.Screen name="Confirmation" component={Confirmation} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function CartStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
     
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      {/* Add more screens related to Profile if needed */}
    </Stack.Navigator>
  );
}

function MyTabs() {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === 'HomeStack') {
            iconName = HomeIcon;
          } else if (route.name === 'CartStack') {
            iconName = CartIcon;
          } else if (route.name === 'ProfileStack') {
            iconName = ProfileIcon;
          }

          return (
            <Image
              source={iconName}
              style={{ width: 30, height: 30, tintColor: color }}
            />
          );
        },
      })}
    >
      <Tab.Screen name="HomeStack" component={HomeStack} options={{ title: 'Home', headerShown: false }} />
      <Tab.Screen name="CartStack" component={CartStack} options={{ title: 'Cart', headerShown: false, tabBarBadge: cartItems.length }} />
      <Tab.Screen name="ProfileStack" component={ProfileStack} options={{ title: 'Profile', headerShown: false }} />
    </Tab.Navigator>
  );
}

function MainApp() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="MyTabs" component={MyTabs} options={{ drawerLabel:()=>null,headerShown:false}} />
      {/* <Drawer.Screen name="Login" component={Login} options={{ drawerLabel:()=>null}} /> */}
      {/* Add other drawer screens here if needed */}
    </Drawer.Navigator>
  );
}

export default MainApp;
