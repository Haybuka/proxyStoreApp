import React from 'react';
import { View, TextInput, Text } from 'react-native';

function UtilityInput({ title, placeholder, value, handleSet, ...rest }) {

  const handleTextChange = (text) => {
    handleSet(text)
  }

  return (
    <View className="border border-gray-200 px-3 py-2 rounded-lg my-4  w-full">
      <Text className="">{title}</Text>
      <TextInput
        placeholder={placeholder}
        className="text-gray-400 py-2 "
        onChangeText={handleTextChange}
        value={value}
        {...rest}
      />
    </View>
  );
}



export default UtilityInput;