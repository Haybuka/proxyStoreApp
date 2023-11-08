import React, { useState } from 'react';
import { View, StyleSheet, Pressable, Text, Image, ScrollView } from 'react-native';
import Screen from '../components/Screen';
import Header from '../components/Utility/Lifestyle/header';
import ElectricityForm from '../components/Utility/Electricity/electricityForm';
import TitheForm from '../components/Utility/Tithes/titheForm';

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



  console.log(utility)

  return (
    <Screen>
      <Header title={"Payment Info"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="mt-6">
          <View className="w-20 h-20 mx-auto">
            <Image resizeMode='cover' className="w-full h-full" source={utility?.image} />
          </View>
          <Text className="text-center font-semibold my-3 text-lg capitalize">{utility?.label}</Text>
        </View>
        {
          utility.type === "electricity" ? (<ElectricityForm />) : (<TitheForm />)
        }
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default PaymentInfoScreen;