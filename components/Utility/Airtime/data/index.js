import React, { useState } from 'react';
import InputType from '../inputType';
import AirtimeButton from '../button';
import { useNavigation } from '@react-navigation/native';

function DataSelect() {
  const [amount, setAmount] = useState()
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
  const navigation = useNavigation()

  const handlePurchase = () => {
    navigation.navigate("Receipt", {
      details: {
        showDetail: false,
        message: "Your data bundle purchase was successful"
      }
    })
  }

  return (
    <AirtimeButton handlePurchase={handlePurchase} >
      <InputType title={'Data Plan'} placeholder={'Select data plan'} inputMode='numeric' value={plan} handleSet={handlePlanSet} />
      <InputType title={'Phone Number'} placeholder={'Enter phone number'} inputMode='numeric' value={phonenumber} handleSet={handleNumberSet} />
      <InputType title={'Amount'} placeholder={'0.00'} inputMode='numeric' value={amount} handleSet={handleAmountSet} />
    </AirtimeButton>
  );
}

export default DataSelect;