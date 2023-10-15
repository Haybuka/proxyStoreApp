import React from 'react';
import { View, StyleSheet } from 'react-native';
import Screen from '../components/Screen';

function PaymentInfoScreen(props) {
  return (
    <Screen>
      <View className="flex-row items-center relative py-3">
        <Pressable onPress={handleBackPress} className="absolute z-10 ">
          <ArrowLeft />

        </Pressable>
        <Text className="flex-1 text-center text-[18px] font-semibold ">{pageTitle}</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default PaymentInfoScreen;