import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import SplashScreen from './SplashScreen'; // Import the splash screen component


import MainApp from './MainApp';
import OTPScreen from './OTPScreen';


const Stack = createNativeStackNavigator();




const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="MainApp" component={MainApp}/>
        <Stack.Screen name="OTP" component={OTPScreen}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
