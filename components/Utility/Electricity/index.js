import React, { useState } from 'react'
import { FlatList, Image, Pressable, Text, View } from 'react-native'
import ArrowRight from '../../../assets/icon/ArrowRight'
import { useNavigation } from '@react-navigation/native'
// ../assets/icon/utilities/Electricity/Ikeja.png
const data = [
  {
    label: "ikeja electric",
    name: "ikeja",
    image: require('../../../assets/icon/utilities/Electricity/Ikeja.png'),
    id: 1
  },
  {
    label: "ibadan electric",
    name: "ibadan",
    image: require('../../../assets/icon/utilities/Electricity/Ibadan.png'),
    id: 2
  },
  {
    label: "eko electric",
    name: "eko",
    image: require('../../../assets/icon/utilities/Electricity/Eko.png'),
    id: 3
  }
]

const Electricity = () => {
  const navigation = useNavigation()

  const handleTitleChange = (utility) => {
    navigation.navigate("Payment", {
      utility,
      type: 'electricity'
    })
  }

  return (
    <View className="px-2 py-8">
      <FlatList
        data={data}
        keyExtractor={(data) => data.id.toString()}
        ItemSeparatorComponent={<View className="my-3"></View>}
        renderItem={({ item }) => (
          <Pressable onPress={() => handleTitleChange(item)} className="border border-gray-200 flex-row items-center rounded-md p-3 py-4">
            <View className="flex-1 flex-row items-center ">
              <Image source={item.image} />
              <Text className="capitalize font-medium text-[16px] ml-2">{item.label}</Text>
            </View>
            <ArrowRight stroke='#0D5FFF' />

          </Pressable>
        )} />
    </View>
  )

}

export default Electricity