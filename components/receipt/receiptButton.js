import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import DownloadIcon from '../../assets/icon/download';

function ReceiptButton(props) {
  return (
    <TouchableOpacity >
      <View className="flex-row justify-center items-center py-3 rounded-md bg-white border border-gray-300">
        <Text>Save Receipt</Text>
        <DownloadIcon />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default ReceiptButton;