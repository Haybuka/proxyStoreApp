import React from 'react';
import { View, Text } from 'react-native';
import utitlityIcons from '../../utils/utitlityIcons';
import currencyFormat from '../../utils/currencyFormat';

function TransactionList({ item }) {
  return (
    <View className="flex-row py-6">
      <View className="flex-1 flex-row items-start">
        <View className="w-10 h-10 mr-2 items-center">
          {utitlityIcons(item.icon)}
        </View>
        <View className="">
          <Text className="text-[16px] mt-0 pt-0 font-semibold">{currencyFormat(item.amount)}</Text>
          <Text className="text-gray-400 capitalize text-[14px] tracking-wider">{item.name}</Text>
        </View>
      </View>
      <Text>{item.date}</Text>
    </View>
  );
}



export default TransactionList;