import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';

function VolutionInput({ value, onChange, placeholder }) {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        className="border border-gray-400 rounded-md px-2 py-3 my-2" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default VolutionInput;