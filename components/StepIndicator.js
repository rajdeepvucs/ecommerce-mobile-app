import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity,Text} from 'react-native';
import Address from './Address';
import Payment from './Payment';
import Successfull from './Successfull';

const StepIndicatorEx= () => {
const [step,setstep]=useState(1)

  return (
    <View style={styles.container}>
      <View className="flex-row justify-center mt-3">
        <View className="flex-col justify-center">
        <View style={{height:30,width:30,borderRadius:15,backgroundColor:step>0?"green":"#f2f2f2"}}><Text className="text-white absolute p-2">{1}</Text></View>
       {step>=1?(<Text className="mt-1 text-base font-semibold">Address</Text>):null}
        </View>
     
      <View style={{height:2,width:100,borderRadius:15,backgroundColor:step>1?"green":"#f2f2f2",marginTop:15}}></View>
      <View className="flex-col justify-center">
        <View style={{height:30,width:30,borderRadius:15,backgroundColor:step>1?"green":"#f2f2f2"}}><Text className="text-white absolute p-2">{2}</Text></View>
        {step>=2?(<Text className="mt-1 text-base font-semibold">Payment</Text>):null}
        </View>
      <View style={{height:2,width:100,borderRadius:15,backgroundColor:step>2?"green":"#f2f2f2",marginTop:15}}></View>
      <View className="flex-col justify-center">
        <View style={{height:30,width:30,borderRadius:15,backgroundColor:step>2?"green":"#f2f2f2"}}><Text className="text-white absolute p-2 ">{3}</Text></View>
        {step>=3?(<Text className="mt-1 text-base font-semibold">Order</Text>):null}
        </View>
      </View>
      {step==3?<Address />:null}
      {step==2?<Payment />:null}
      {step==1?<Successfull/>:null}
      <View>     
         <TouchableOpacity className="p-3 rounded-full bg-amber-600 mt-2" onPress={()=>{setstep(step+1)}}>
  <Text className="text-white text-center font-bold text-lg">Next</Text>

</TouchableOpacity></View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
});

export default StepIndicatorEx;