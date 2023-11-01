import React, { useState } from 'react'
import Screen from '../components/Screen'
import { Pressable, Text, View } from 'react-native'
import cls from 'classnames'

import Header from '../components/Utility/Lifestyle/header';



const ServiceLocationScreen = ({ route, route: { params }, navigation }) => {



  console.log("in location", params)

  const handleReceipt = () => {
    navigation.navigate("Receipt", {
      details: {
        ...params
      }
    })
  }

  return (
    <Screen>
      <Header title={'Location'} />

      <View className="bg-white">
        <Pressable onPress={handleReceipt} className="bg-blue-700 py-4 my-6 rounded-md">
          <Text className="text-white text-center">Continue to Payment</Text>
        </Pressable>
      </View>
    </Screen>
  )
}

export default ServiceLocationScreen