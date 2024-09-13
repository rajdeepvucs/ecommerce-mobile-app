import * as React from 'react';
import {  StatusBar } from 'react-native'
import AppNavigation from './components/AppNavigation';
import { ModalPortal } from 'react-native-modals';
import{StripeProvider} from "@stripe/stripe-react-native"

function App() {
  return (
    <StripeProvider
    publishableKey={"pk_test_51OPKboSEYwIaQY1qjbGLWfuMwats12PkvZsAbMCLB9lT5mCpTbxbAZ7Qzg14Yi0hCiKfurrPNSUymP9aRPhzcTGZ00btE2FhIn"}>
    <StatusBar backgroundColor='#fff' barStyle='dark-content' />

   <AppNavigation />
   <ModalPortal />
   </StripeProvider>
  );
}

export default App;
