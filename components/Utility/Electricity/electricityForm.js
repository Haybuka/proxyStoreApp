import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import UtilityInput from '../../utilityInput';
import UtilityButton from '../../utilityButton';


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
      <UtilityInput title={`Meter Type `} placeholder={'Select meter type'} value={amount} handleSet={handleAmountSet} />
      <UtilityInput title={`Meter number`} placeholder={'Enter meter number'} inputMode='numeric' value={amount} handleSet={handleAmountSet} />
      <UtilityInput title={`Phone number`} placeholder={'Enter Phone number'} inputMode='numeric' value={amount} handleSet={handleAmountSet} />
      <UtilityInput title={`Email`} placeholder={'Enter email address'} value={amount} handleSet={handleAmountSet} />
      <UtilityInput title={`Amount`} placeholder={'0.00'} value={amount} handleSet={handleAmountSet} />


    </UtilityButton>

  );
}



export default ElectricityForm;