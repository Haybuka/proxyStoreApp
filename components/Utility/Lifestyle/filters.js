import React from 'react';
import { View, Text, TextInput } from 'react-native';
import LocationIcon from '../../../assets/icon/account/location';
import SearchIcon from '../../../assets/icon/account/search';
import SearchVendor from '../../searchVendor';

function LifestyleFilters() {
  return (
    <View className="flex flex-row items-center py-3 ">
      <View className="flex-row items-center border border-gray-200 py-2 px-3 rounded-lg mr-3">
        <LocationIcon />
        <View className="mx-2">
          <TextInput placeholder='Nearby' />
        </View>
      </View>
      <SearchVendor />
    </View>
  );
}


export default LifestyleFilters;