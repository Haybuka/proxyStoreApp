import React from 'react';
import { Text, View } from 'react-native';
import ArrowRight from '../../assets/icon/ArrowRight';

function AccountTabs({ title, options }) {
  return (
    <View>
      <Text className="text-[#728BA5] text-[14px] mb-2">{title}</Text>
      <View className="border border-gray-100 rounded-md px-3 mb-8 py-4">
        {
          options.map((option) => (
            <View key={option.id} className="py-2 my-1 flex-row items-center">
              <Text className="text-lg flex-1 capitalize">{option.name}</Text>
              <ArrowRight />
            </View>
          ))
        }
      </View>
    </View>
  );
}

export default AccountTabs;