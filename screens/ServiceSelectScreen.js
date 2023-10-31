import React, { useLayoutEffect, useState } from 'react'
import Screen from '../components/Screen'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import ArrowLeft from '../assets/icon/account/LeftArrow';
import LifestyleFilters from '../components/Utility/Lifestyle/filters';
import Header from '../components/Utility/Lifestyle/header';



const ServiceSelectScreen = ({ route, route: { params }, navigation }) => {
  const [pageTitle, setPageTitle] = useState("")


  console.log(params)
  // useLayoutEffect(() => {
  //   setPageTitle(params?.utility)

  // }, [params?.utility.label])

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
      <Header title={'Select a service'} />
      <View className="justify-center items-center m-1 p-3">
        <Image resizeMode='contain' source={params?.image} />
        <Text>{params.name} {params.id}</Text>
        <Text numberOfLines={1} className="text-[12px] text-[#808CA3]">{params.address}</Text>
      </View>

    </Screen>
  )
}

export default ServiceSelectScreen