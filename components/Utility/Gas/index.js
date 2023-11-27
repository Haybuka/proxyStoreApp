import React from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'
import FuelList from '../../fuelList'
import FilterIcon from '../../../assets/icon/home/filterIcon'
import SearchVendor from '../../searchVendor'
import FuelProduct from '../../../utils/fuelProducts'

const Gas = () => {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchVendor css={'flex-1'} />
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

export default Gas