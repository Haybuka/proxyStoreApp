import React from 'react';
import { View, Text } from 'react-native';

function ReceiptBody({ details }) {
  const { amount } = details
  return (
    <View>
      <View className="flex-row justify-between items-center my-3">
        <Text>Ref. Number</Text>
        <Text>0000000</Text>
      </View>
      <View className="flex-row justify-between items-center my-3">
        <Text>Status</Text>
        <Text>Successful</Text>
      </View>
      <View className="flex-row justify-between items-center my-3">
        <Text>Date</Text>
        <Text>Nov. 15 2023</Text>
      </View>
      <View className="flex-row justify-between items-center my-3">
        <Text>Payment Method</Text>
        <Text>Tokenized Card</Text>
      </View>
      <View className="flex-row justify-between items-center my-3">
        <Text>Amount</Text>
        <Text>NGN {amount}</Text>
      </View>
      <View className="flex-row justify-between items-center my-3 border-t border-t-gray-200 pt-4 mb-4">
        <Text>Total</Text>
        <Text>NGN {amount}</Text>
      </View>
    </View>
  );
}



export default ReceiptBody;