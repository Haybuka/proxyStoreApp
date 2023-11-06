import React, { useState } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import InputType from '../inputType';


const airtimeOptions = ['100', '200', '500', '1000']
function AirtimeSelect(props) {

  const [amount, setAmount] = useState('0')
  const [phonenumber, setPhoneNumber] = useState('')

  const handleAmountSet = (value) => {
    setAmount(value)
  }

  const handleNumberSet = (value) => {
    setPhoneNumber(value)
  }

  return (
    <View>
      <InputType title={'Amount'} placeholder={'0.00'} inputMode='numeric' value={amount} handleSet={handleAmountSet} />
      <View className="flex-row justify-between items-center my-6">
        {
          airtimeOptions.map((option) => (
            <Pressable onPress={() => handleAmountSet(option)} key={option} className=" flex-row items-center rounded-md border border-blue-700 py-2 px-6">
              <Text>{option}</Text>
            </Pressable>
          ))
        }
      </View>
      <InputType title={'Phone Number'} placeholder={'Enter phone number'} inputMode='numeric' value={phonenumber} handleSet={handleNumberSet} />
    </View>
  );
}



export default AirtimeSelect;