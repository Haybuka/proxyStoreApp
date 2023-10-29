import React from 'react'
import { FlatList, Image, Pressable, Text, View } from 'react-native'
import ArrowRight from '../../../assets/icon/ArrowRight'
import { useNavigation } from '@react-navigation/native'

const data = [
  {
    label: "Barbing",
    name: "barb",
    image: require('../../../assets/icon/utilities/lifestyle/Barbing.png'),
    id: 1
  },
  {
    label: "Make up",
    name: "makeup",
    image: require('../../../assets/icon/utilities/lifestyle/Makeup.png'),
    id: 2
  },
  {
    label: "Manicure",
    name: "manicure",
    image: require('../../../assets/icon/utilities/lifestyle/Manicure.png'),
    id: 3
  },
  {
    label: "Pedicure",
    name: "pedicure",
    image: require('../../../assets/icon/utilities/lifestyle/Pedicure.png'),
    id: 4
  },
  {
    label: "Massage",
    name: "massage",
    image: require('../../../assets/icon/utilities/lifestyle/Massage.png'),
    id: 5
  },
  {
    label: "Facials",
    name: "facials",
    image: require('../../../assets/icon/utilities/lifestyle/Facial.png'),
    id: 6
  }
]



const Lifestyle = () => {
  const navigation = useNavigation()
  //  const [pageData,setPageData] = useState()


  const handleTitleChange = (utility) => {
    navigation.navigate("Payment", {
      utility
    })
  }
  return (
    <View className="px-2 py-8">
      <FlatList
        data={data}
        keyExtractor={(data => data.id.toString())}
        showsVerticalScrollIndicator={false}
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

export default Lifestyle