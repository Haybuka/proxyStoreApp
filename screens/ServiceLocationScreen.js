import React, { useState } from 'react'
import Screen from '../components/Screen'
import { FlatList, Modal, Pressable, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import cls from 'classnames'

import Header from '../components/Utility/Lifestyle/header';



const ServiceLocationScreen = ({ route, route: { params }, navigation }) => {



  const [modal, setModal] = useState(false)
  const [st, setSt] = useState('')

  const countries = [
    {
      state: "Lagos",
      code: "LAG",
    },
    {
      state: "Ekiti",
      code: "EKT",
    },
    {
      state: "Ogun",
      code: "OGN",
    },
    {
      state: "Oyo state",
      code: "OYO",
    }
  ]
  const handleReceipt = () => {
    navigation.navigate("Receipt", {
      details: {
        ...params,
        showDetail: true
      }
    })
  }

  const handleModal = () => {
    setModal(prev => !prev)
  }

  const handleState = (state) => {
    handleModal()
    setSt(state)
  }

  return (
    <Screen>
      <Header title={'Location'} />
      <View className="py-6 px-1">
        <View className="border border-gray-200 px-3 py-2 rounded-lg">
          <Text className="">Address</Text>
          <TextInput
            placeholder='Enter your delivery address'
            className="text-gray-400 py-2 "
          />
        </View>
        <View className="my-3 flex-row">
          <View className="border flex-1 mr-2 border-gray-200 px-3 py-2 rounded-lg">
            <Text className="">State</Text>
            <View className="relative justify-center">
              <TextInput
                placeholder='Select state'
                className="text-gray-400 py-2 "
                value={st.state}
              />
              <Pressable className="absolute right-2 bg-white" onPress={handleModal}>
                <Text>H</Text>
              </Pressable>
            </View>
          </View>
          <View className="border flex-1 mr-2 border-gray-200 px-3 py-2 rounded-lg">
            <Text className="">City</Text>
            <View className="relative justify-center">
              <TextInput
                placeholder='Select state'
                className="text-gray-400 py-2 "
                value={st.state}
              />
              <Pressable className="absolute right-2 bg-white" onPress={handleModal}>
                <Text>H</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View className="bg-white">
          <Pressable onPress={handleReceipt} className="bg-blue-700 py-4 my-6 rounded-md">
            <Text className="text-white text-center">Continue to Payment</Text>
          </Pressable>
        </View>
      </View>
      <Modal visible={modal}>
        <Screen >
          <FlatList
            data={countries}
            ItemSeparatorComponent={<View className="my-1 border border-gray-200"></View>}
            renderItem={({ item }) => (
              <TouchableOpacity className=" py-3 px-2" onPress={() => handleState(item)}>
                <Text>{item.state}</Text>
              </TouchableOpacity>
            )}
          />

        </Screen>


      </Modal>
    </Screen>
  )
}

export default ServiceLocationScreen