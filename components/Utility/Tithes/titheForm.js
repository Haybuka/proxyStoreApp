import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import UtilityInput from '../../utilityInput';
import UtilityButton from '../../utilityButton';

function TitheForm({ }) {
  const navigation = useNavigation()
  const [amount, setAmount] = useState()

  const handleAmountSet = (value) => {
    setAmount(value)
  }



  const handlePayment = () => {
    navigation.navigate("Receipt", {
      details: {
        showDetail: false,
        message: "Your tithe has been paid."
      }
    })
  }
  return (
    <View style={styles.container}>
      <UtilityButton handlePayment={handlePayment} >
        <UtilityInput title={`What's your monthly income ?`} placeholder={'0.00'} inputMode='numeric' value={amount} handleSet={handleAmountSet} />

      </UtilityButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default TitheForm;