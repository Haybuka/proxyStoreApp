import React, { useState } from 'react'
import Screen from '../components/Screen'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import cls from 'classnames'

import Header from '../components/Utility/Lifestyle/header';
import CheckBox from '../assets/icon/CheckBox';
import DownloadIcon from '../assets/icon/download';
import ReceiptHeader from '../components/receipt/receiptHeader';
import ReceiptBody from '../components/receipt/receiptBody';
import ReceiptButton from '../components/receipt/receiptButton';
import Receipt from '../components/receipt';



const ReceiptScreen = ({ route, route: { params }, navigation }) => {



  console.log("in reecipt", params)


  return (
    <Screen bg={'#0D5FFF'}>
      <Header title={'Receipt'} border='#2972FF' color='white' download />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="w-16 p-4 h-16 rounded-full mx-auto overflow-hidden my-3 justify-center items-center">
          <CheckBox />
        </View>
        <Text className="text-lg text-center text-white font-semibold mb-4">Payment Successful!</Text>
        <Receipt data={params.details} />
        <Text className="text-center text-white my-4">You will present the receipt at the barbing salon to confirm
          your purchase.</Text>
      </ScrollView>
    </Screen>
  )
}

export default ReceiptScreen