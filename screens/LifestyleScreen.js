import React, { useLayoutEffect, useState } from 'react'
import Screen from '../components/Screen'
import { ScrollView, Text, } from 'react-native'
import LifestyleFilters from '../components/Utility/Lifestyle/filters';

import lifestyleOptions from '../utils/lifestyleOptions';
import Header from '../components/Utility/Lifestyle/header';

const LifestyleScreen = ({ route, route: { params }, navigation }) => {
  const [pageTitle, setPageTitle] = useState("")

  useLayoutEffect(() => {
    setPageTitle(params?.utility)

  }, [params?.utility.label])

  return (
    <Screen>
      <Header title={pageTitle.label} />
      <LifestyleFilters />

      <ScrollView showsVerticalScrollIndicator={false}>
        {
          lifestyleOptions(pageTitle.label)
        }
      </ScrollView>


    </Screen>
  )
}

export default LifestyleScreen