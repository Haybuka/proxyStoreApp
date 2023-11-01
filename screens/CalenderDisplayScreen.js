import React, { useState } from 'react'
import Screen from '../components/Screen'
import { Pressable, ScrollView, Text, View } from 'react-native'


import Header from '../components/Utility/Lifestyle/header';
import { Calendar } from 'react-native-calendars';
import ProxyCalender from '../components/calender';



const CalenderDisplayScreen = ({ route, route: { params }, navigation }) => {


  const [selectedDate, setSelectedDate] = useState('');


  const handleDaySelect = (date) => {
    setSelectedDate(date)
  }
  const timing = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <Screen>
      <Header title={'Select date/time'} />
      <ScrollView >

        <ProxyCalender handleSelect={handleDaySelect} />

        <View className="border-t pt-4 border-gray-200 mt-6">
          <View>
            <Text className="text-gray-400">Available times</Text>
            <Text className="my-3">{selectedDate}</Text>
          </View>
        </View>
        <View className="flex-row flex-wrap items-center py-2 gap-1">
          {timing.map((time) => (
            <View key={time} className="border border-gray-200 py-2 px-3 my-2 rounded-md">
              <Text> 7 : 30 am</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <View className="bg-white ">
        {
          selectedDate ?
            (
              <Pressable className="bg-blue-700 py-4 my-6 rounded-md">
                <Text className="text-white text-center">Next</Text>
              </Pressable>) :
            (
              <Pressable className="bg-blue-200 py-4 my-6 rounded-md">
                <Text className="text-white text-center">Next</Text>
              </Pressable>
            )
        }
      </View>
    </Screen>
  )
}

export default CalenderDisplayScreen