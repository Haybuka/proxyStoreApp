import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import InputType from '../inputType';

function DataSelect() {
  const [amount, setAmount] = useState('0')
  const [plan, setPlan] = useState('')
  const [phonenumber, setPhoneNumber] = useState('')

  const handleAmountSet = (value) => {
    setAmount(value)
  }

  const handlePlanSet = (value) => {
    setPlan(value)
  }

  const handleNumberSet = (value) => {
    setPhoneNumber(value)
  }

  return (
    <View>
      <InputType title={'Data Plan'} placeholder={'Select data plan'} inputMode='numeric' value={plan} handleSet={handlePlanSet} />
      <InputType title={'Phone Number'} placeholder={'Enter phone number'} inputMode='numeric' value={phonenumber} handleSet={handleNumberSet} />
      <InputType title={'Amount'} placeholder={'0.00'} inputMode='numeric' value={amount} handleSet={handleAmountSet} />
    </View>
  );
}

export default DataSelect;