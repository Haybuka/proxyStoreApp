import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ReceiptHeader from './receiptHeader';
import ReceiptBody from './receiptBody';
import ReceiptButton from './receiptButton';

function Receipt({ data }) {
  return (
    <View>
      <View>
        <View className="bg-white px-4 py-3 rounded-xl">
          <ReceiptHeader details={data} />
          <View>
            <ReceiptBody details={data} />
            <ReceiptButton />
          </View>
        </View>
        <Text className="text-center text-white my-4">You will present the receipt at the {data.name} to confirm
          your purchase.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default Receipt;