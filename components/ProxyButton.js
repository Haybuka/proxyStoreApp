import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import colors from '../utils/colors';
import { useForm, Controller } from "react-hook-form"

function ProxyButton({ title, handlePress }) {
  const { handleSubmit, } = useForm()
  return (
    <TouchableOpacity onPress={handleSubmit(handlePress)} className={`py-3 mt-6 rounded-md bg-[${colors.primary}]`}>
      <Text className="text-white text-center">{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default ProxyButton;