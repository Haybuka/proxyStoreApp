import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import CheckBoxsmall from '../../../assets/icon/Checkboxsmall';

function ServiceList({ service, handleSelectedId, selectedId }) {

  const [selected, setSelected] = useState(false)

  const handleServiceSelect = () => {
    setSelected(prev => !prev)
    handleSelectedId(service)
  }

  return (
    <View className="flex flex-row my-4">
      <View className="flex-1">
        <Text className="text-lg">{service.description}</Text>
        <Text className="text-[14px] text-[#808CA3]">NGN {service.amount}</Text>
      </View>
      {
        selectedId === service.id ?
          (
            <Pressable onPress={handleServiceSelect} className="bg-blue-700 rounded-md py-1 px-3 flex-row justify-center items-center">
              <Text className="text-white mr-3"> Selected</Text>
              <CheckBoxsmall />
            </Pressable>)
          : (
            <Pressable onPress={handleServiceSelect} className="border border-gray-200 rounded-md py-1 px-3 items-center justify-center">
              <Text className="text-blue-700"> Select Service</Text>
            </Pressable>
          )
      }
    </View>
  );
}



export default ServiceList;