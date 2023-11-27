import React from 'react';
import { View, Text, Image } from 'react-native';

function ReceiptHeader({ details }) {
  const { name, image, description } = details
  return (
    <View className="relative py-4 mb-8">
      <View className="w-18 h-18 rounded-full mx-auto my-2 justify-center items-center">
        <Image
          source={image}
          resizeMode='contain'
        />
      </View>
      <View>
        <Text className="text-center font-semibold text-base my-2">{name}</Text>
      </View>
      <View className="absolute bottom-0 flex-row justify-between items-center  w-full">
        <View className="absolute w-10 h-8 bg-blue-600 rounded-full -left-10"></View>
        <View className="w-full border-dashed border-b-2 border-gray-200">

        </View>
        <View className="absolute w-10 h-8 bg-blue-600 rounded-full -right-10"></View>
      </View>
    </View>
  );
}


export default ReceiptHeader;