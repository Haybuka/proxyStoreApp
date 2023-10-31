import React from 'react';
import { View, Text } from 'react-native';
import LocationIcon from '../../../assets/icon/account/location';
import SearchIcon from '../../../assets/icon/account/search';

function LifestyleFilters() {
  return (
    <View className="flex flex-row justify-between items-center py-3">
      <View className="flex-row items-center border border-gray-200 py-2 px-1">
        <LocationIcon />
        <Text className="mx-2">Nearby</Text>
      </View>
      <View className="flex-row items-center border border-gray-200 py-2 px-1">
        <SearchIcon />
        <Text className="mx-2">Search Vendor</Text>
      </View>
    </View>
  );
}


export default LifestyleFilters;