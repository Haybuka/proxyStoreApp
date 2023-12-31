import React from 'react'
import { FlatList, Image, Pressable, Text, View } from 'react-native'
import ArrowRight from '../../../assets/icon/ArrowRight'
import { useNavigation } from '@react-navigation/native'
import SearchVendor from '../../searchVendor'

const data = [
  {
    label: "Anglican Church",
    name: "ikeja",
    image: require('../../../assets/icon/utilities/Tithes/Tithes.png'),
    id: 1
  },
  {
    label: "Celebration Church",
    name: "celebration",
    image: require('../../../assets/icon/utilities/Tithes/Tithes.png'),
    id: 2
  },
  {
    label: "Foursquare Gospel Church",
    name: "foursquare",
    image: require('../../../assets/icon/utilities/Tithes/Tithes.png'),
    id: 3
  },
  {
    label: "Harvesters",
    name: "harvest",
    image: require('../../../assets/icon/utilities/Tithes/Tithes.png'),
    id: 4
  },
  {
    label: "House on the rock",
    name: "house",
    image: require('../../../assets/icon/utilities/Tithes/Tithes.png'),
    id: 5
  },
  {
    label: "Oika christain centre",
    name: "oika",
    image: require('../../../assets/icon/utilities/Tithes/Tithes.png'),
    id: 6
  },
  {
    label: "Oika christain centre",
    name: "oika",
    image: require('../../../assets/icon/utilities/Tithes/Tithes.png'),
    id: 7
  },
  {
    label: "Oika christain centre",
    name: "oika",
    image: require('../../../assets/icon/utilities/Tithes/Tithes.png'),
    id: 8
  }
]

const Tithes = () => {
  const navigation = useNavigation()
  //  const [pageData,setPageData] = useState()


  const handleTitleChange = (data) => {
    const utility = { ...data, type: 'tithe' }

    navigation.navigate("Payment", { utility })
  }


  return (
    <View className="px-2 ">
      <SearchVendor css={'flex-1'} placeholder='Search church' />
      <FlatList
        data={data}
        keyExtractor={(data => data.id.toString())}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={<View className="my-3"></View>}
        renderItem={({ item }) => (
          <Pressable onPress={() => handleTitleChange(item)} className="border border-gray-200 flex-row items-center rounded-md p-3 py-4">
            <View className="flex-1 flex-row items-center ">

              <Image source={item.image} />
              <Text className="capitalize font-medium text-[16px] ml-2">{item.label}</Text>
            </View>

            <ArrowRight stroke='#0D5FFF' />

          </Pressable>
        )} />
    </View>
  )
}


export default Tithes