import React from 'react';
import { View, Text, TextInput } from 'react-native';
import LocationIcon from '../../../assets/icon/account/location';
import SearchIcon from '../../../assets/icon/account/search';

function LifestyleFilters() {
  return (
    <View className="flex flex-row items-center py-3">
      <View className="flex-row items-center border border-gray-200 py-2 px-1">
        <LocationIcon />
        <View className="mx-2">
          <TextInput placeholder='Nearby' />
        </View>
      </View>
      <View className="flex-row items-center border border-gray-200 py-2 px-1 mx-3">
        <SearchIcon />
        <View className="mx-2">
          <TextInput placeholder='Search vendor' />
        </View>
      </View>
    </View>
  );
}


export default LifestyleFilters;