import React, { useState } from 'react'
import Screen from '../components/Screen'
import { Pressable, Text, TextInput, View } from 'react-native'
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
      <View className="py-6 px-1">
        <View className="border border-gray-200 px-3 py-2 rounded-lg">
          <Text className="">Address</Text>
          <TextInput
            placeholder='Enter your delivery address'
            className="text-gray-400 py-2 "
          />
        </View>
        <View className="my-3 flex-row">
          <View className="border flex-1 mr-2 border-gray-200 px-3 py-2 rounded-lg">
            <Text className="">State</Text>
            <View className="relative justify-center">
              <TextInput
                placeholder='Select state'
                className="text-gray-400 py-2 "
              />
              <Text className="absolute right-2 bg-white">H</Text>
            </View>
          </View>
          <View className="border flex-1 border-gray-200 px-3 py-2 rounded-lg">
            <Text className="">City</Text>
            <TextInput
              placeholder='Enter your city'
              className="text-gray-400 py-2 "
            />
          </View>
        </View>
        <View className="bg-white">
          <Pressable onPress={handleReceipt} className="bg-blue-700 py-4 my-6 rounded-md">
            <Text className="text-white text-center">Continue to Payment</Text>
          </Pressable>
        </View>
      </View>
    </Screen>
  )
}

export default ServiceLocationScreen