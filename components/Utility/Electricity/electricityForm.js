import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import UtilityInput from '../../utilityInput';
import UtilityButton from '../../utilityButton';
import { Pressable, Text, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons/'


function ElectricityForm(props) {
  const navigation = useNavigation()
  const [amount, setAmount] = useState()

  const handleAmountSet = (value) => {
    setAmount(value)
  }



  const handlePayment = () => {
    navigation.navigate("Receipt", {
      details: {
        showDetail: false,
        message: "A token will be sent to your phone number which you will load on the meter box to get the purchased power units."
      }
    })
  }
  return (
    <UtilityButton handlePayment={handlePayment} >
      <View className="border border-gray-200 px-3 py-2 rounded-lg my-4">
        <Text className="">Meter Type</Text>
        <View className="flex flex-row items-center">
          <TextInput
            placeholder={"Select meter type"}
            className="text-gray-400 py-2 flex-1"

          />
          <Pressable>
            <MaterialCommunityIcons name='chevron-down' size={25} />
          </Pressable>
        </View>
      </View>

      <UtilityInput title={`Meter number`} placeholder={'Enter meter number'} inputMode='numeric' value={amount} handleSet={handleAmountSet} />
      <UtilityInput title={`Phone number`} placeholder={'Enter Phone number'} inputMode='numeric' value={amount} handleSet={handleAmountSet} />
      <UtilityInput title={`Email`} placeholder={'Enter email address'} value={amount} handleSet={handleAmountSet} />
      <UtilityInput title={`Amount`} placeholder={'0.00'} value={amount} handleSet={handleAmountSet} />


    </UtilityButton>

  );
}



export default ElectricityForm;