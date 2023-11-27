import React, { useLayoutEffect, useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import Screen from '../components/Screen';
import Header from '../components/Utility/Lifestyle/header';
import ArrowRight from '../assets/icon/ArrowRight';

import cls from 'classnames'
import Accordion from '../components/accordion';
import UtilityInput from '../components/utilityInput';
import SearchVendor from '../components/searchVendor';

function FilterScreen({ route, route: { params }, navigation }) {

  const [pageTitle, setPageTitle] = useState("")
  const [min, setMin] = useState()
  const [max, setMax] = useState()

  const handleMinSet = (value) => {
    setMin(value)
  }

  const handleMaxSet = (value) => {
    setMax(value)
  }

  useLayoutEffect(() => {
    setPageTitle(route?.name)
  }, [route?.name])

  console.log(params)

  const handleFilterApply = () => {
    console.log(navigation)
    navigation.navigate("Purchase", {
      ...params
    })
  }

  return (
    <Screen>
      <Header title={pageTitle} />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View className=" mb-6">
          <Accordion title={'Location'}>
            <SearchVendor css={'flex-1'} placeholder='Search location' />
          </Accordion>
          <Accordion title={'Price'}>
            <View className="flex-row items-center">
              <View className=" w-[48%] mr-2">
                <UtilityInput title={'Minimum amount'} placeholder={'0.00'} inputMode='numeric' value={min} handleSet={handleMinSet} />
              </View>
              <View className="w-1/2">

                <UtilityInput title={'Maximum amount'} placeholder={'0.00'} inputMode='numeric' value={max} handleSet={handleMaxSet} />
              </View>
            </View>

          </Accordion>
        </View>
        <Pressable onPress={handleFilterApply} className="bg-blue-700 py-4 my-6 rounded-md">
          <Text className="text-white text-center">Apply filters</Text>
        </Pressable>
      </ScrollView>
    </Screen>
  );
}



export default FilterScreen;