import React, { useState } from 'react'
import { FlatList, Pressable, Text, View } from 'react-native'
import ArrowRight from '../../../assets/icon/ArrowRight'
import { useNavigation } from '@react-navigation/native'

const data = [
  {
    label: "ikeja electric",
    name: "ikeja",
    image: "",
    id: 1
  },
  {
    label: "ibadan electric",
    name: "ibadan",
    image: "",
    id: 2
  },
  {
    label: "eko electric",
    name: "eko",
    image: "",
    id: 3
  }
]

const Electricity = () => {
  const navigation = useNavigation()
  //  const [pageData,setPageData] = useState()

  const handleTitleChange = (item) => {
    // navigation.push('Utility')
    navigation.navigate("Payment", {
      item
    })
  }

  return (
    <View className="px-2 py-8">
      <FlatList
        data={data}
        keyExtractor={(data) => data.id.toString()}
        ItemSeparatorComponent={<View className="my-3"></View>}
        renderItem={({ item }) => (
          <Pressable onPress={() => handleTitleChange(item)} className="border border-gray-300 flex-row items-center rounded-md p-3 py-4">
            <View className="flex-1 ">
              <Text className="capitalize font-semibold text-[16px]">{item.label}</Text>
            </View>
            <ArrowRight stroke='#0D5FFF' />

          </Pressable>
        )} />
    </View>
  )
}

export default Electricity