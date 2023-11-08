
import React from 'react';
import { View, Pressable, Text } from 'react-native';

function UtilityButton({ handlePayment, children, title = "Continue to Payment" }) {

  return (
    <View>
      {children}
      <Pressable onPress={handlePayment} className="bg-blue-700 py-4 my-6 rounded-md">
        <Text className="text-white text-center">{title}</Text>
      </Pressable>
    </View>
  );
}



export default UtilityButton;