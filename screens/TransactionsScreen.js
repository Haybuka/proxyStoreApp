import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
const transactions = [
  {
    name: "Electricity",
    amount: 3000,
    date: "12.03.2021",
    icon: "",
    id: 1
  },
  {
    name: "tithes & offering",
    amount: 1000,
    date: "10.13.2022",
    icon: "",
    id: 2
  },
  {
    name: "Electricity",
    amount: 5000,
    date: "12.03.2021",
    icon: "",
    id: 3
  },
  {
    name: "Electricity",
    amount: 12000,
    date: "12.03.2021",
    icon: "",
    id: 4
  },
  {
    name: "Electricity",
    amount: 12000,
    date: "12.03.2021",
    icon: "",
    id: 5
  },
  {
    name: "tithes & offering",
    amount: 1000,
    date: "10.13.2022",
    icon: "",
    id: 6
  },
  {
    name: "Electricity",
    amount: 7000,
    date: "12.03.2021",
    icon: "",
    id: 7
  },
  {
    name: "tithes & offering",
    amount: 1000,
    date: "10.13.2022",
    icon: "",
    id: 8
  },
]


const TransactionsScreen = () => {

  const currencyFormat = (amount = 0, currency = 'NGN ') => {
    return currency + amount?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  return (
    <View className="flex-1 bg-white">
      <View className="h-[148px] bg-[#F7F9FF] justify-center items-center border-b-2 border-gray-100">
        <Text className="text-black text-xl font-semibold">Transactions</Text>
      </View>
      <View className="px-4 mb-[150px]">
        <FlatList
          data={transactions}
          ItemSeparatorComponent={<View className="border border-gray-50"></View>}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}

          renderItem={({ item }) => (
            <View className="flex-row py-6">
              <View className="flex-1 flex-row items-start">
                <View className="w-10 h-10 bg-gray-200 rounded-full mr-3"></View>
                <View className="">
                  <Text className="text-lg mt-0 pt-0 font-semibold">{currencyFormat(item.amount)}</Text>
                  <Text className="text-gray-400 capitalize text-[14px] tracking-wider">{item.name}</Text>
                </View>
              </View>
              <Text>{item.date}</Text>
            </View>
          )}
        />
      </View>
    </View>
  )
}

export default TransactionsScreen