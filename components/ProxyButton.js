import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import colors from '../utils/colors';
import { useForm } from "react-hook-form"

function ProxyButton({ title, handlePress }) {
  const { handleSubmit, } = useForm()
  return (
    <TouchableOpacity onPress={handleSubmit(handlePress)} className={`py-3 mt-2 rounded-md bg-[${colors.primary}]`}>
      <Text className="text-white text-center">{title}</Text>
    </TouchableOpacity>
  );
}



export default ProxyButton;