import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import utitlityIcons from '../../utils/utitlityIcons'
import { useNavigation } from '@react-navigation/native'




export default function UtilityCard({ item }) {
  const navigation = useNavigation()
  const handleUtility = () => {
    navigation.navigate('Utility', {
      name: item?.name
    })
    navigation.setOptions({ title: item?.label })
  }

  return (
    <TouchableOpacity onPress={handleUtility} className="h-[124px]  w-[124px] border border-gray-100 justify-center items-center">
      <View className="h-14 w-14 my-2 border border-gray-200 rounded-full justify-center items-center">
        {
          utitlityIcons(item.icon)
        }
      </View>
      <Text numberOfLines={1} className="my-2">{item.label}</Text>
    </TouchableOpacity>
  )
}