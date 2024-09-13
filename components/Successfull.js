import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';
import Animated,{  FadeInDown } from 'react-native-reanimated';
export default function Successfull() {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Simulate a successful order
    const timer = setTimeout(() => {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000); // Reset confetti after 3 seconds
    }, 1000); // Delay to simulate order processing

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
       <Animated.Text  entering={FadeInDown.delay(300).duration(5000).springify().damping(12)} className="text-2xl">
      Order successful!
      </Animated.Text>
      {showConfetti && (
        <ConfettiCannon count={400} origin={{ x: -10, y: 0 }} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});