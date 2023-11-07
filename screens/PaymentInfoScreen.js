import React, { useState } from 'react';
import { View, StyleSheet, Pressable, Text, Image, ScrollView } from 'react-native';
import Screen from '../components/Screen';
import ProxyButton from '../components/ProxyButton';
import ArrowLeft from '../assets/icon/account/LeftArrow';
import InputType from '../components/Utility/Tithes/inputType';

// 1 - select drop down
// 2 - Number
// 3 - text

const electric = {
  name: '',
  img: '',
  fieldOptions: [
    {
      name: 'Metre type',
      type: 1,
      options: []
    },
    {
      name: 'Metre Number',
      type: 2
    }
  ]
}


function PaymentInfoScreen({ navigation, route: { params: { utility } } }) {
  const [amount, setAmount] = useState()

  const handleAmountSet = (value) => {
    setAmount(value)
  }

  const handleBackPress = () => {
    navigation.goBack();
  }


  return (
    <Screen>
      <View className="flex-row items-center relative py-3 pb-4 mb-4 border-b border-gray-100">
        <Pressable onPress={handleBackPress} className="absolute z-10 ">

          <ArrowLeft />

        </Pressable>
        <Text className="flex-1 text-center text-[18px] font-semibold ">Payment info</Text>
      </View>
      <ScrollView>
        <View className="mt-6">
          <View className="w-20 h-20 mx-auto">
            <Image resizeMode='cover' className="w-full h-full" source={utility?.image} />
          </View>
          <Text className="text-center font-semibold my-3 text-lg capitalize">{utility?.label}</Text>
        </View>
        <InputType title={`What's your monthly income ?`} placeholder={'0.00'} inputMode='numeric' value={amount} handleSet={handleAmountSet} />

        <ProxyButton title={"Continue to Payment"} />

      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default PaymentInfoScreen;