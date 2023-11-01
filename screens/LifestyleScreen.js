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

  const barbing = [
    {
      name: 'Ultimate cutz',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../assets/icon/utilities/lifestyle/BarberCutz.png'),
      id: 1,
      description: "Mens clipper cut"
    },
    {
      name: 'Ultimate cutz',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../assets/icon/utilities/lifestyle/BarberCutz.png'),
      id: 2,
      description: "Mens clipper cut"
    },
    {
      name: 'Ultimate cutz',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../assets/icon/utilities/lifestyle/BarberCutz.png'),
      id: 3,
      description: "Mens clipper cut"
    },
    {
      name: 'Ultimate cutz',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../assets/icon/utilities/lifestyle/BarberCutz.png'),
      id: 4,
      description: "Mens clipper cut"
    },
    {
      name: 'Ultimate cutz',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../assets/icon/utilities/lifestyle/BarberCutz.png'),
      id: 5,
      description: "Mens clipper cut"
    },
    {
      name: 'Ultimate cutz',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../assets/icon/utilities/lifestyle/BarberCutz.png'),
      id: 6,
      description: "Mens clipper cut"
    },
    {
      name: 'Ultimate cutz',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../assets/icon/utilities/lifestyle/BarberCutz.png'),
      id: 7,
      description: "Mens clipper cut"
    },
    {
      name: 'Last One',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../assets/icon/utilities/lifestyle/BarberCutz.png'),
      id: 8,
      description: "Mens clipper cut"
    }
  ]

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