import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { EyeIcon, EyeSlashIcon, } from "react-native-heroicons/outline";

function ProxyInput({ title, icon, ...rest }) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <View className={`border border-gray-200 rounded-md px-2 py-3 mb-1`}>
      <Text className="capitalize">{title}</Text>
      <View className="flex-row items-center">
        <TextInput
          className="flex-1"

          {...rest}
        />
        {
          icon && (
            <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
              {
                isVisible ? <EyeIcon size={25} color={'#000'} /> : <EyeSlashIcon size={25} color={'#000'} />
              }
            </TouchableOpacity>
          )
        }

      </View>

    </View>
  );
}



export default ProxyInput;