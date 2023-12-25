import React, { useLayoutEffect, useState } from 'react';
import { View, Text, Pressable, ScrollView, Switch, Image, TextInput } from 'react-native';
import Screen from '../components/Screen';
import Header from '../components/Utility/Lifestyle/header';
import { MaterialCommunityIcons } from '@expo/vector-icons/'

import cls from 'classnames'
import UtilityInput from '../components/utilityInput';

function PurchaseScreen({ route, route: { params }, navigation }) {

  const { amt, description, image, name } = params
  const [pageTitle, setPageTitle] = useState("")

  const [address, setAddress] = useState("")
  const [amount, setAmount] = useState()
  const [pickup, setPickup] = useState(false)


  const handleMaxSet = (value) => {
    setAmount(value)
  }

  const [modal, setModal] = useState(false)
  const [st, setSt] = useState('')

  const handleAddressSet = (text) => {
    setAddress(text)
  }


  const handleModal = () => {
    setModal(prev => !prev)
  }

  const handleState = (state) => {
    handleModal()
    setSt(state)
  }

  const handlePickupSwitch = () => {
    setPickup(prev => !prev)
  }
  const handleAddress = (value) => {
    setAddress(value)
  }

  const handleReceipt = () => {
    navigation.navigate("Receipt", {
      details: {
        ...params,
        showDetail: true
      }
    })
  }


  return (
    <Screen>
      <Header title={"Make Purchase"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="text-center justify-center items-center mb-10">
          <Image
            source={params?.image}
          />
          <Text>{name}</Text>
          <Text className="text-[#989898] my-3">{description}</Text>
          <Text className="bg-black text-white rounded-full py-2 px-4 "> Gas @ NGN {amt}/kg</Text>
        </View>
        <View className=" mb-6">
          <View className="flex-row items-center">
            <Text className="font-semibold mr-2">Naira</Text>
            <Switch />
            <Text className="font-semibold ml-2">Kg</Text>

          </View>
          <UtilityInput title={'Enter amount'} placeholder={'0.00'} inputMode='numeric' value={amount} handleSet={handleMaxSet} />
        </View>
        <View className="flex-row items-center">
          <Pressable onPress={handlePickupSwitch} className="border border-[#808CA3] w-4 h-4 rounded overflow-hidden mr-3">
          </Pressable>
          <Text>Pickup and delivery</Text>
        </View>
        {
          pickup && (
            <View>
              <UtilityInput title={'Delivery address'} placeholder={'Enter your delivery address'} value={address} handleSet={handleAddress} />
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

                      <MaterialCommunityIcons name='chevron-down' size={25} />
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
                      <MaterialCommunityIcons name='chevron-down' size={25} />
                    </Pressable>
                  </View>
                </View>
              </View>
              <Text className="text-sm italic">Note that pickup and delivery attract extra charges</Text>
            </View>
          )
        }
        <Pressable onPress={handleReceipt} className="bg-blue-700 py-4 my-6 rounded-md">
          <Text className="text-white text-center">Continue to payment</Text>
        </Pressable>
      </ScrollView>
    </Screen>
  );
}



export default PurchaseScreen;