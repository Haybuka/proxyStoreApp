import React from 'react';
import { View, StyleSheet } from 'react-native';
import ReceiptHeader from './receiptHeader';
import ReceiptBody from './receiptBody';
import ReceiptButton from './receiptButton';

function Receipt({ data }) {
  return (
    <View className="bg-white px-4 py-3 rounded-xl">
      <ReceiptHeader details={data} />
      <View>
        <ReceiptBody details={data} />
        <ReceiptButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default Receipt;