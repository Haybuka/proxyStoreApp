import React, { useEffect, useLayoutEffect, useState } from 'react'
import Screen from '../components/Screen'
import { Pressable, ScrollView, Text, View } from 'react-native'
import ArrowLeft from '../assets/icon/account/LeftArrow';



import UtilityScreenType from '../components/Utility';
import Header from '../components/Utility/Lifestyle/header';

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

      <Header title={pageTitle} />
      <View className=" mb-10">

        <UtilityScreenType title={pageTitle} />
      </View>

    </Screen>
  )
}

export default UtilityScreen