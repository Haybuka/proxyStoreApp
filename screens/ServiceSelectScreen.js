import React, { useState } from 'react'
import Screen from '../components/Screen'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import cls from 'classnames'

import Header from '../components/Utility/Lifestyle/header';
import LocationIcon from '../assets/icon/account/location';
import ServiceList from '../components/Utility/Lifestyle/serviceList';



const ServiceSelectScreen = ({ route, route: { params }, navigation }) => {

  const data = [
    {
      name: 'Item One',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../assets/icon/utilities/lifestyle/BarberCutz.png'),
      id: 1,
      description: "Description of item",
      amount: '5,000'
    },
    {
      name: 'Item Two',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../assets/icon/utilities/lifestyle/BarberCutz.png'),
      id: 2,
      description: "Description of item",
      amount: '5,000'
    },
    {
      name: 'Item Three',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../assets/icon/utilities/lifestyle/BarberCutz.png'),
      id: 3,
      description: "Description of item",
      amount: '5,000'
    },
    {
      name: 'Item Four',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../assets/icon/utilities/lifestyle/BarberCutz.png'),
      id: 4,
      description: "Description of item",
      amount: '5,000'
    },
    {
      name: 'Item Five',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../assets/icon/utilities/lifestyle/BarberCutz.png'),
      id: 5,
      description: "Description of item",
      amount: '5,000'
    },
    {
      name: 'Item Six',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../assets/icon/utilities/lifestyle/BarberCutz.png'),
      id: 6,
      description: "Description of item",
      amount: '5,000'
    },
    {
      name: 'Item Seven',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../assets/icon/utilities/lifestyle/BarberCutz.png'),
      id: 7,
      description: "Description of item",
      amount: '5,000'
    },
    {
      name: 'Last Eight',
      address: "153, Ikorodu rd, Palm ...",
      image: require('../assets/icon/utilities/lifestyle/BarberCutz.png'),
      id: 8,
      description: "Description of item",
      amount: '5,000'
    }
  ]

  const [serviceType, setServiceType] = useState(0)
  const [selectedId, setSelectedId] = useState(0)
  const [service, setService] = useState({})

  const handleSelectedId = (service) => {
    setSelectedId(service.id)
    setService(service)
  }

  const handleServiceSelected = () => {
    navigation.navigate("Calender", {
      ...service,
      image: params.image
    })
  }

  return (
    <Screen>
      <Header title={'Select a service'} />
      <ScrollView showsHorizontalScrollIndicator={false}>

        <View className="justify-center items-center m-1 p-3">
          <Image resizeMode='contain' source={params?.image} />
          <Text>{params.name} {params.id}</Text>
          <View className="flex-row items-center my-1">
            <LocationIcon dimension='18' />
            <Text numberOfLines={1} className="text-[12px] text-[#808CA3]">{params.address}</Text>
          </View>
        </View>

        <View className="flex-row py-1 border w-[250px] border-gray-200 px-1 bg-gray-100 rounded-md my-3 mb-4 justify-between items-center">
          <Pressable onPress={() => setServiceType(0)}>
            <Text className={cls(serviceType === 0 ? "py-2 px-4 rounded-md bg-blue-600 text-white" : "py-2 px-4 rounded-md bg-transparent text-black")}>Walk in</Text>
          </Pressable>
          <Pressable onPress={() => setServiceType(1)}>
            <Text className={cls(serviceType === 1 ? "py-2 px-4 rounded-md bg-blue-600 text-white" : "py-2 px-4 rounded-md bg-transparent text-black")}>Home service</Text>
          </Pressable>
        </View>
        {
          data.map((item, id) => (
            <ServiceList key={id} service={item} handleSelectedId={handleSelectedId} selectedId={selectedId} />
          ))
        }
      </ScrollView>
      <View className="bg-white">
        {
          selectedId ?
            (
              <Pressable onPress={handleServiceSelected} className="bg-blue-700 py-4 my-6 rounded-md">
                <Text className="text-white text-center">Continue</Text>
              </Pressable>) :
            (
              <Pressable className="bg-blue-200 py-4 my-6 rounded-md">
                <Text className="text-white text-center">Continue</Text>
              </Pressable>
            )
        }
      </View>
    </Screen>
  )
}

export default ServiceSelectScreen