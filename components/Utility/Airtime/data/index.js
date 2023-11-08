import React, { useState } from 'react';
import AirtimeButton from '../button';
import { useNavigation } from '@react-navigation/native';
import UtilityInput from '../../../utilityInput';

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
      <UtilityInput title={'Data Plan'} placeholder={'Select data plan'} inputMode='numeric' value={plan} handleSet={handlePlanSet} />
      <UtilityInput title={'Phone Number'} placeholder={'Enter phone number'} inputMode='numeric' value={phonenumber} handleSet={handleNumberSet} />
      <UtilityInput title={'Amount'} placeholder={'0.00'} inputMode='numeric' value={amount} handleSet={handleAmountSet} />
    </AirtimeButton>
  );
}

export default DataSelect;