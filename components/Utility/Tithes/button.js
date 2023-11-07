
import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';

function TitheButton({ handlePayment, children }) {

  return (
    <View>
      {children}
      <Pressable onPress={handlePayment} className="bg-blue-700 py-4 my-6 rounded-md">
        <Text className="text-white text-center">Continue to Payment</Text>
      </Pressable>
    </View>
  );
}



export default TitheButton;