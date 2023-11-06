import React, { useState } from 'react'
import Screen from '../components/Screen'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'


import Header from '../components/Utility/Lifestyle/header';
import CheckBox from '../assets/icon/CheckBox';
import Receipt from '../components/receipt';



const ReceiptScreen = ({ route, route: { params: { details } }, navigation }) => {
  const { message = "A token will be sent to your phone number which you will load on the meter box to get the purchased power units.", showDetail } = details
  const [detail] = useState(showDetail)
  console.log(details)
  return (
    <Screen bg={'#0D5FFF'}>
      <Header title={'Receipt'} border='#2972FF' color='white' hidden={detail} />
      {
        detail ? (
          <>


            <ScrollView showsVerticalScrollIndicator={false}>
              <View className="w-16 p-4 h-16 rounded-full mx-auto overflow-hidden my-3 justify-center items-center">
                <CheckBox />
              </View>
              <Text className="text-lg text-center text-white font-semibold mb-4">Payment Successful!</Text>
              <Receipt data={details} />

            </ScrollView>
          </>
        ) : (
          <View className=" justify-between flex-1 pb-4">
            <View className="overflow-hidden my-3 justify-center items-center">
              <CheckBox />
              <View className="my-3">
                <Text className="text-lg text-center text-white font-semibold mb-4">Payment Successful!</Text>
                <Text className="text-center text-[#B9D1FF] mb-4">{message}</Text>

              </View>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("Index")}>
              <View className="flex-row justify-center items-center py-3 rounded-md bg-white border border-gray-300">
                <Text>Done</Text>
              </View>
            </TouchableOpacity>
          </View>
        )
      }
    </Screen>
  )
}

export default ReceiptScreen