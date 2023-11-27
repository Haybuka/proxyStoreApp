import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { FlatList, Image, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import cls from 'classnames'
import TypeSelect from './typeSelect'
import AirtimeSelect from './airtime'
import DataSelect from './data'


const networkOptions = [
  {
    label: "Mtn",
    name: "mtn",
    image: require('../../../assets/icon/Airtime/Mtn.png'),
    id: 1
  },
  {
    label: "Airtel",
    name: "airtel",
    image: require('../../../assets/icon/Airtime/Airtel.png'),
    id: 2
  },
  {
    label: "Glo",
    name: "glo",
    image: require('../../../assets/icon/Airtime/Glo.png'),
    id: 3
  },
  {
    label: "9mobile",
    name: "9mobile",
    image: require('../../../assets/icon/Airtime/9Mobile.png'),
    id: 4
  },
  {
    label: "9mobile",
    name: "9mobile",
    image: require('../../../assets/icon/Airtime/Mtn.png'),
    id: 5
  }
]

const Airtime = () => {
  const [type, setType] = useState(0)
  const [selected, setSelected] = useState(-1)

  const handleType = (id) => {
    setType(id)
  }

  const handleCarrierSelect = (carrier) => {
    setSelected(carrier.id)
  }

  return (
    <ScrollView>
      <View className="px-1">
        <View className="flex flex-row justify-between items-center bg-gray-200 rounded-md p-1">
          <TypeSelect title={'Airtime'} value={0} userSelect={type} handleTypePress={handleType} />
          <TypeSelect title={'Data'} value={1} userSelect={type} handleTypePress={handleType} />
        </View>
        <View className="my-6">
          <FlatList
            data={networkOptions}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={<View className="mx-2"></View>}
            renderItem={({ item }) => (
              <TouchableOpacity key={item.id} onPress={() => handleCarrierSelect(item)} className={cls(" flex-row items-center rounded-md", selected === item.id && 'border-2 border-[#0D5FFF]')}>
                <Image source={item.image} />
              </TouchableOpacity>
            )}
          />
        </View>
        {
          type === 0 ? (
            <AirtimeSelect />
          ) : (
            <DataSelect />
          )
        }

      </View>
    </ScrollView>
  )
}

export default Airtime