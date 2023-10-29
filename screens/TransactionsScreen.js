import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import TransactionList from '../components/Transaction/TransactionList'
const transactions = [
  {
    name: "Electricity",
    amount: 3000,
    date: "12.03.2021",
    icon: "electricity",
    id: 1
  },
  {
    name: "tithes & offering",
    amount: 1000,
    date: "10.13.2022",
    icon: "church",
    id: 2
  },
  {
    name: "Electricity",
    amount: 5000,
    date: "12.03.2021",
    icon: "electricity",
    id: 3
  },
  {
    name: "Water",
    amount: 12000,
    date: "12.03.2021",
    icon: "water",
    id: 4
  },
  {
    name: "Electricity",
    amount: 12000,
    date: "12.03.2021",
    icon: "electricity",
    id: 5
  },
  {
    name: "tithes & offering",
    amount: 1000,
    date: "10.13.2022",
    icon: "church",
    id: 6
  },
  {
    name: "Fuel",
    amount: 7000,
    date: "12.03.2021",
    icon: "fuel",
    id: 7
  },
  {
    name: "Barbing",
    amount: 1000,
    date: "10.13.2022",
    icon: "lifestyle",
    id: 8
  },
]


const TransactionsScreen = () => {


  return (
    <View className="flex-1 bg-white">
      <View className="h-[100px] bg-[#F7F9FF] justify-end pb-4 items-center border-b-2 border-gray-100">
        <Text className="text-black text-xl font-semibold">Transactions</Text>
      </View>
      <View className="px-4 mb-[150px]">
        <FlatList
          data={transactions}
          ItemSeparatorComponent={<View className="border border-gray-50"></View>}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}

          renderItem={({ item }) => (
            <TransactionList key={item.id} item={item} />
          )}
        />
      </View>
    </View>
  )
}

export default TransactionsScreen