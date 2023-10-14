import React from 'react'
import Screen from '../components/Screen'
import { Pressable, ScrollView, Text, View } from 'react-native'
import ArrowLeft from '../assets/icon/account/LeftArrow';

const UtilityScreen = ({ route, route: { name, params }, navigation }) => {


  const handleBackPress = () => {
    navigation.goBack();
  }
  return (
    <Screen>
      <ScrollView>
        <View className="flex-row">
          <Pressable onPress={handleBackPress} className="">
            <ArrowLeft />

          </Pressable>
          <Text className="flex-1 text-center">{params?.name} {name} Screen</Text>
        </View>
      </ScrollView>
    </Screen>
  )
}

export default UtilityScreen