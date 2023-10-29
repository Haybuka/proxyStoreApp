import React, { useEffect, useLayoutEffect, useState } from 'react'
import Screen from '../components/Screen'
import { Pressable, ScrollView, Text, View } from 'react-native'
import ArrowLeft from '../assets/icon/account/LeftArrow';



import UtilityScreenType from '../components/Utility';

const UtilityScreen = ({ route, route: { params }, navigation }) => {

  const [pageTitle, setPageTitle] = useState("")

  const handleBackPress = () => {
    navigation.goBack();
  }

  useLayoutEffect(() => {
    setPageTitle(params?.name)
  }, [params?.name])



  return (
    <Screen>
      <View className="flex-row items-center relative py-3">
        <Pressable onPress={handleBackPress} className="absolute z-10 ">
          <ArrowLeft />

        </Pressable>
        <Text className="flex-1 text-center text-[18px] font-semibold ">{pageTitle}</Text>
      </View>
      {/* <ScrollView className=""> */}
      <UtilityScreenType title={pageTitle} />
      {/* </ScrollView> */}
    </Screen>
  )
}

export default UtilityScreen