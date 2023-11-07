
import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';

function AirtimeButton({ handlePurchase, children }) {

  return (
    <View>
      {children}
      <Pressable onPress={handlePurchase} className="bg-blue-700 py-4 my-6 rounded-md">
        <Text className="text-white text-center">Continue to Payment</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default AirtimeButton;