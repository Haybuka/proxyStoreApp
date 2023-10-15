import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import Screen from '../components/Screen';

function PaymentInfoScreen({ navigation }) {

  const handleBackPress = () => {
    navigation.goBack();
  }

  return (
    <Screen>
      <View className="flex-row items-center relative py-3">
        <Pressable onPress={handleBackPress} className="absolute z-10 ">
          {/* <ArrowLeft /> */}
          <Text>Back</Text>
        </Pressable>
        <Text className="flex-1 text-center text-[18px] font-semibold ">Payment info screen</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default PaymentInfoScreen;