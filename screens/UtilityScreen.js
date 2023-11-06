import React, { useLayoutEffect, useState } from 'react'
import Screen from '../components/Screen'
import { View } from 'react-native'



import UtilityScreenType from '../components/Utility';
import Header from '../components/Utility/Lifestyle/header';

const UtilityScreen = ({ route, route: { params }, navigation }) => {

  const [pageTitle, setPageTitle] = useState("")

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