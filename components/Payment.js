import React, { useEffect, useState } from 'react';
import { Text, View, Button, Alert, ToastAndroid } from 'react-native';
import { useStripe } from '@stripe/stripe-react-native';

export default function Payment() {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);

  const fetchPaymentSheetParams = async () => {
    try {
      const response = await fetch("http://192.168.1.16:3000/pay", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const { paymentIntent, ephemeralKey, customer,} = await response.json();

      return {
        paymentIntent,
        ephemeralKey,
        customer,
      
      };
    } catch (error) {
      console.error("Error fetching payment sheet params:", error);
    }
  };

  const initializePaymentSheet = async () => {
    try {
      const { paymentIntent, ephemeralKey, customer } = await fetchPaymentSheetParams();

      if (!paymentIntent || !ephemeralKey || !customer ) {
        Alert.alert("Error", "Unable to initialize payment sheet.");
        return;
      }

      const { error } = await initPaymentSheet({
        merchantDisplayName: "Swayampurna",
        customerId: customer,
       
        customerEphemeralKeySecret: ephemeralKey,
        paymentIntentClientSecret: paymentIntent,
        allowsDelayedPaymentMethods: true,
        defaultBillingDetails: {
          name: 'Jane Doe',
        },
      });

      if (!error) {
        setLoading(true); // Enable the button when ready
        console.log("Payment sheet initialized successfully.");
      } else {
        console.error("Error initializing payment sheet:", error);
      }
    } catch (error) {
      console.error("Error initializing payment sheet:", error);
    }
  };

  const openPaymentSheet = async () => {
    try {
    
      const { error } = await presentPaymentSheet();

      if (error) {
        Alert.alert(`Error code: ${error.code}`, error.message);
      } else {
        ToastAndroid.show('Success, Your order is confirmed!',ToastAndroid.SHORT);
      }
    } catch (error) {
      console.error("Error presenting payment sheet:", error);
    }
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  return (
    <View style={{flex:1, justifyContent:"center",alignItems:"center", padding: 20 }}>
      <Button
        title="Pay"
        disabled={!loading} // Enable the button only when loading is true
        onPress={openPaymentSheet}
      />
    </View>
  );
}
