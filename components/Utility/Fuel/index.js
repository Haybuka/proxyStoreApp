import React from 'react'
import { Pressable, Text, TextInput, View, Image, ScrollView } from 'react-native'
import SearchVendor from '../../searchVendor'
import SearchIcon from '../../../assets/icon/account/search'
import FilterIcon from '../../../assets/icon/home/filterIcon'
import ArrowRight from '../../../assets/icon/ArrowRight'
import FuelList from '../../fuelList'
import FuelProduct from '../../../utils/fuelProducts'


const Fuel = () => {
  return (
    <View className="">
      <ScrollView showsHorizontalScrollIndicator={false}>
        <SearchVendor css={'flex-1'} filterButton />

        <Text className="text-lg text-gray-600"> {FuelProduct.length} Results</Text>
        {
          FuelProduct.map((product, id) => (
            <FuelList product={product} key={id} />
          ))
        }
      </ScrollView>

    </View>
  )
}

export default Fuel