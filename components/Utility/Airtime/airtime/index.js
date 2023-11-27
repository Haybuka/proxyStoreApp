import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AirtimeButton from '../button';
import UtilityInput from '../../../utilityInput';


const airtimeOptions = ['100', '200', '500', '1000']
function AirtimeSelect(props) {

  const navigation = useNavigation()

  const handlePurchase = () => {
    navigation.navigate("Receipt", {
      details: {
        showDetail: false,
        message: "Your data bundle purchase was successful"
      }
    })
  }

  const [amount, setAmount] = useState()
  const [phonenumber, setPhoneNumber] = useState('')

  const handleAmountSet = (value) => {
    setAmount(value)
  }

  const handleNumberSet = (value) => {
    setPhoneNumber(value)
  }



  return (
    <AirtimeButton handlePurchase={handlePurchase}>
      <UtilityInput title={'Amount'} placeholder={'0.00'} inputMode='numeric' value={amount} handleSet={handleAmountSet} />
      <View className="flex-row justify-between items-center my-6">
        {
          airtimeOptions.map((option) => (
            <Pressable onPress={() => handleAmountSet(option)} key={option} className=" flex-row items-center rounded-md border-2 font-bold border-[#0D5FFF] py-2 px-6">
              <Text>{option}</Text>
            </Pressable>
          ))
        }
      </View>
      <UtilityInput title={'Phone Number'} placeholder={'Enter phone number'} inputMode='numeric' value={phonenumber} handleSet={handleNumberSet} />
    </AirtimeButton>
  );
}



export default AirtimeSelect;